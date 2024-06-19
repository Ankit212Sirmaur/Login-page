"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';

const Signup: React.FC = () => {
	const router = useRouter();
	const [FirstName, setFirstName] = useState("");
	const [LastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!userName || !password || !FirstName || !LastName || !email || !confPassword) {
                alert('Please enter all the required details');
                return;
            } else if (password.length < 8) {
                setPasswordError('Password should be at least 8 characters long');
                return;
            } else if (password !== confPassword) {
                setPasswordError("Passwords do not match");
                return;
            } else {
                setPasswordError("");
                router.push('/feed');
            }
        } catch (error) {
            alert('Something went wrong');
        }
    };

	return (
		<div className="min-h-screen bg-gray-200 flex justify-center items-center">
			<div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
				<h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="FirstName">First Name</label>
						<input
							type="text"
							id="FirstName"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={FirstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="LastName">Last Name</label>
						<input
							type="text"
							id="LastName"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={LastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="userName">Username</label>
						<input
							type="text"
							id="userName"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="confPassword">Confirm Password</label>
						<input
							type="password"
							id="confPassword"
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							value={confPassword}
							onChange={(e) => setConfPassword(e.target.value)}
						/>
                         {passwordError && <p className="text-red-500">{passwordError}</p>}
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							Signup
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
