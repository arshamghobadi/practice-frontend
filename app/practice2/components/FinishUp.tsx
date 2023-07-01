'use client';
interface FinishUpPRops {
  yearly: boolean;
  serviceValue?: string[];
  plan: string;
  monthlyPrice: number;
}
const FinishUp: React.FC<FinishUpPRops> = ({
  yearly,
  plan,
  monthlyPrice,
  serviceValue,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className=" bg-gray-100 p-4">
        <div className="flex items-center justify-between border-b border-gray-300 ">
          <div className="flex flex-col">
            <span>
              {plan} {yearly ? 'yearly' : 'monthly'}
            </span>
            <span className="mb-3">change</span>
          </div>
          <div>
            ${monthlyPrice}/{yearly ? 'yr' : 'mo'}
          </div>
        </div>
        <div className=" flex flex-col space-y-2 mt-3">
          <div className="flex items-center justify-between">
            <span className="w-full flex flex-col space-y-2">
              {serviceValue?.map((item, i) => (
                <div className="flex items-center justify-between" key={i}>
                  <div>{item}</div>

                  <div className="flex">
                    <div>
                      {item === 'Online sevice' && (
                        <div>{yearly ? '10' : '1'}</div>
                      )}

                      {item === 'Larger storage' && (
                        <div>{yearly ? '20' : '2'}</div>
                      )}

                      {item === 'Customizable profile' && (
                        <div>{yearly ? '20' : '2'}</div>
                      )}
                    </div>
                    <span className={`${!item ? 'hidden' : ''}`}>
                      {yearly ? 'yr' : 'mo'}
                    </span>
                  </div>
                </div>
              ))}
            </span>
          </div>
          <div className="flex items-center justify-between"></div>
        </div>
      </div>
      <div className="flex items-center justify-between p-5">
        <span>Total</span>
        <span>+$ price/ monthly</span>
      </div>
    </div>
  );
};

export default FinishUp;
