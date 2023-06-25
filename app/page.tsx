'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
};
export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    router.push('/success');
  };
  console.log(watch('example'));
  return (
    <div className=" h-screen flex flex-col items-center justify-center text-slate-800">
      <div className=" bg-white  rounded-3xl">
        <div className="flex items-center justify-between p-4 gap-8">
          <div className=" space-y-3 text-sm ml-2">
            <h2 className=" text-4xl">stay updated!</h2>
            <p className="">
              Join 60,000 product mangers receiving monthly updates on:
            </p>
            <div className=" space-y-2 text-xs">
              <div className="flex gap-4">
                <Image
                  src="/images/practice-1/icon-list.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/practice-1/icon-list.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/practice-1/icon-list.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
                <p>And much more!</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between text-[8px] font-semibold">
                  <label className=" ">Email address</label>
                  {errors.example && (
                    <span className="text-rose-400">
                      This field is required
                    </span>
                  )}
                </div>
                <input
                  {...register('example', { required: true, minLength: 4 })}
                  className={`border p-2 rounded-md bg-white
                  ${errors.example ? 'bg-rose-100 text-rose-400' : ''}
                  `}
                  type="email"
                  placeholder="email@company.com"
                />
              </div>
              <button
                type="submit"
                className={`bg-[#37384e] p-2 text-white rounded-md w-full
                
                `}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div>
            <Image
              src="/images/practice-1/illustration-sign-up-desktop.svg"
              alt="pic"
              width={290}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
