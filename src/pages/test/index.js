import { useState } from "react";
import smathealth from "@/assets/smathealth.png";
import logo from "@/assets/plateaumed-logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from "yup";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { Button } from "@/components";
import Link from "next/link";
import { withPublic } from "@/hooks/routes";



function Login({ auth }) {
    const router = useRouter();
    const { setUser } = auth;
    const [disabled, setDisabled] = useState(false);
    const [activePassword, setActivePassword] = useState(false);


    

    let userSchema = object({
        email: string().email().trim().required("Email is required"),
        password: string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    });

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          email: "",
          password: ""
        },
        validationSchema: userSchema
    });


    const login = async (event) => {
        event.preventDefault()
        console.log("Testing....");
        setDisabled(true);
        try {
            console.log("Logining........");
            console.log(values.email, values.password);
            const response = await AuthService.login(values.email, values.password);
            console.log(response);
            toast.success(response.data.message);
            if (typeof window !== "undefined") {
                localStorage.setItem("plateaumed_hr", response.data.token);
                localStorage.setItem("plateaumed_hr_user", JSON.stringify(response.data.data));
                //JSON.stringify(obj);
            }
            setUser(response.data.data);
            setDisabled(false);
            router.replace("/dashboard/staff");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            //actions.setSubmitting(false)
            setDisabled(false);
        }
    }

    return (
        <main className="flex w-full h-screen">
            <section className="w-[50%] bg-[#677597] flex flex-col justify-end items-center text-white text-center">
                <div className="mb-20 px-16">
                    <h2 className="text-[32px] font-bold mb-20">Good Neighbourhood</h2>

                    <h3 className="text-[24px] font-bold">Keep easy track of insurance claims</h3>
                    <p className="text-[16px] font-medium">Health insurance system and records’ management made efficient, seamless, and portable</p>
                    <div className="flex justify-center gap-2 mt-5">
                        <span className="w-[16px] bg-[#CDD8F3] h-[8px] rounded-[12px] flex"></span>
                        <span className="w-[8px] bg-[#DFE2E9] h-[8px] rounded-full flex"></span>
                        <span className="w-[8px] bg-[#DFE2E9] h-[8px] rounded-full flex"></span>
                    </div>
                </div>
                
            </section>
            <section className="w-[50%] bg-[#EDF0F8] flex flex-col justify-between p-[32px]">
                <Image src={smathealth} width="135" height="" alt="" className="self-end" />

                <form className="px-[100px]" onSubmit={handleSubmit}>
                    <div className="text-center mb-8">
                        <h4 className="font-bold text-[24px] text-[#051438]">Welcome</h4>
                        <p className="text-[16px] text-[#677597] font-medium">Please enter your email address and password</p>
                    </div>

                    <div className="bg-white border border-[#DFE2E9] rounded-[10px] mb-8">
                        <input type="email" id="email" name="email" className="w-full py-[14px] px-[20px] outline-none rounded-[10px]" 
                            placeholder="Enter email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    </div>

                    <div className="border bg-white border-[#DFE2E9] rounded-[10px] pr-4 flex justify-between mb-5">
                        <div className="flex gap-3 items-center w-full">
                            <input type={ activePassword ? "text" : "password"} id="password" name="password" placeholder="Enter password" className="w-full py-[14px] px-[20px] outline-none rounded-[10px]"
                                onChange={handleChange} onBlur={handleBlur} value={values.password} autoComplete="current-password" />
                        </div>
                        <EyeIcon className={ activePassword ? "h-5 w-5 self-center" : "hidden"} onClick={(e) => setActivePassword(false)} />
                        <EyeOffIcon className={ activePassword ? "hidden" : "h-5 w-5 self-center"} onClick={(e) => setActivePassword(true)} />
                    </div>

                    <Link href="/" className="text-[#0B0C7D] text-[16px] font-semibold mb-10 flex">Forgot password?</Link>

                    <Button text="Login" type="submit" />
                </form>

                <Image src={logo} width="130" height="" alt="" className="self-end" />
            </section>
        </main>
    );
}

export default withPublic(Login);