import { useRouter } from "next/dist/client/router";
import React from "react";
import Image from "next/image";
import useAuth from "../hooks1/auth";
import icon from "../assets/rythink.png";

export default function AppLayout({ children }) {
	const auth = useAuth();

	const router = useRouter();

	const logout = () => {
		auth.logout();
		router.replace("/auth/login")
	}


	return (
		children
	);
}