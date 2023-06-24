import Image from 'next/image';

export default function Home() {
  return (
    <div className=" h-screen flex flex-col items-center justify-center text-slate-800">
      <div className=" bg-white w-[70%] h-[50%] rounded-3xl">
        <div className="flex items-center justify-between p-4">
          <div className=" space-y-3 text-sm">
            <h2 className=" text-4xl">stay updated!</h2>
            <p className="">
              Join 60,000 product mangers receiving monthly updates on:
            </p>
            <div className=" space-y-2">
              <div className="flex gap-4">
                <Image
                  src="/images/practice-1/icon-list.svg"
                  alt="icon"
                  width={25}
                  height={25}
                />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/practice-1/icon-list.svg"
                  alt="icon"
                  width={25}
                  height={25}
                />
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/practice-1/icon-list.svg"
                  alt="icon"
                  width={25}
                  height={25}
                />
                <p>And much more!</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/practice-1/illustration-sign-up-desktop.svg"
              alt="pic"
              width={250}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
