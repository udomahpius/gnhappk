import { useState } from 'react'
import { RadioGroup } from '@headlessui/react';
import visa from "@/assets/visa.png";
import master from "@/assets/master.svg";
import Image from 'next/image';

const plans = [
  {
    name: 'Visa **** 5646',
    ram: '04/25',
    cpus: '',
    disk: visa,
  },
  {
    name: 'Master **** 4090',
    ram: '08/2024',
    cpus: '',
    disk: master,
  }
]

export default function CardRadio() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-setly-200'
                      : ''
                  }
                  ${
                    checked ? 'bg-setly-200 text-white' : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                            <div className="flex items-center gap-3 w-full">
                                <Image src={plan.disk} className="h-5 w-14" width="50" height="5" alt="" />

                                <div className="text-sm w-full">
                                    <div className="flex justify-between items-start ">
                                        <div>
                                            <RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${
                                                checked ? 'text-white' : 'text-gray-900'
                                                }`}
                                            >
                                                {plan.name}
                                            </RadioGroup.Label>
                                            <RadioGroup.Description
                                                as="p"
                                                className={`${
                                                checked ? 'text-sky-100' : 'text-gray-500'
                                                }`}
                                            >
                                                <p>
                                                {plan.ram} {plan.cpus}
                                                </p>{' '}
                                            </RadioGroup.Description>
                                        </div>
                                        {checked && (
                                            <div className="shrink-0 text-white">
                                            <CheckIcon className="h-6 w-6" />
                                            </div>
                                        )}
                                    </div>
                                    {/* <div className="flex gap-3">
                                        <button>Set as default</button>
                                        <button className="font-semibold">Edit</button>
                                    </div> */}
                                </div>
                                
                            </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
