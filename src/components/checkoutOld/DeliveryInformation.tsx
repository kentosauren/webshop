//DeliveryInformation.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

const DeliveryInformation: React.FC<Props> = ({ nextStep, prevStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Navigate to the next step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Kontakt</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ ...field }) => (
            <input {...field} type="email" placeholder="E-postadresse" />
          )}
        />
        {errors.email && <span>{String(errors.email.message)}</span>}
      </div>
      <div>
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label htmlFor="newsletter">Send meg nyheter og tilbud pa e-post</label>
      </div>
      {/* ... other fields */}
      <button onClick={nextStep}>Neste</button>
      <button onClick={prevStep}>Neste</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default DeliveryInformation;
