import { useState } from "react";

interface Form {
    name: string,
    email: string,
    message: string
}

const Form = () => {
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [formData, setFormData] = useState<Form>({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const emailIsValid = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name.length < 3) {
            setError('Your name should be at least 3 characters long.');
            return;
        };
        if (!emailIsValid(formData.email)) {
            setError('Please enter a valid email address');
            return;
        };
        if (formData.message.length < 15) {
            setError('Please write a longer message.');
            return;
        }
        const api_url = import.meta.env.VITE_API_URL;
        fetch(api_url, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setSuccess("We received your submission, thank you!");
                    setFormData({ name: "", email: "", message: "" });
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(err => {
                // request related error.
                setError(err.message ? err.message : err);
            });
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
            <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-transparent border-b border-gray-400 py-2 outline-none"
                />
            </div>

            <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Your Email Address"
                    className="w-full bg-transparent border-b border-gray-400 py-2 outline-none"
                />
            </div>
            <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                    Message
                </label>
                <textarea
                    name="message"
                    rows={5}
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Your Message"
                    className="w-full bg-transparent border-b border-gray-400 py-2 outline-none resize-none"
                ></textarea>
            </div>

            {
                error && (
                    <p className="text-xs uppercase text-red-500 tracking-widest">{error}</p>
                )
            }

            {
                success && (
                    <p className="text-xs uppercase text-green-500 tracking-widest">{success}</p>
                )
            }

            <button
                type="submit"
                className="mt-4 w-40 h-9 bg-gray-800 dark:bg-gray-400 text-white dark:text-black uppercase text-sm tracking-widest hover:opacity-70 transition cursor-pointer"
            >
                send
            </button>
        </form>
    );
};

export default Form;