import { Input } from '@/components/ui/input';
import { useCarbonProvider } from '@/context/CarbonContext';
import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
  const {
    calculatedCarbonFootprint,
    calculateFootprint,
    loading
  } = useCarbonProvider();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    calculateFootprint(data);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-300 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Carbon Footprint Calculator</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="carbon-form">
          <div className="grid grid-cols-2 gap-6 mb-6">


            <div className="form-field">
              <label className="block font-semibold">Vehicle Type:</label>
              <Input
                {...register('transportType', { required: 'Vehicle type is required' })}
                placeholder="Vehicle type"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.transportType && <span className="text-red-500 text-sm">{errors.transportType.message}</span>}
            </div>

            <div className="form-field">
              <label className="block font-semibold">Distance (km):</label>
              <Input
                {...register('distance', { required: 'Distance is required', min: 1 })}
                placeholder="Enter distance"
                type="number"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.distance && <span className="text-red-500 text-sm">{errors.distance.message}</span>}
            </div>

            <div className="form-field">
              <label className="block font-semibold">Frequency (e.g., daily, weekly):</label>
              <Input
                {...register('frequency', { required: 'Frequency is required' })}
                placeholder="Enter frequency"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.frequency && <span className="text-red-500 text-sm">{errors.frequency.message}</span>}
            </div>

            <div className="form-field">
              <label className="block font-semibold">Travel Type:</label>
              <select
                {...register('travelType', { required: 'Travel type is required' })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="car">Personal Transport</option>
                <option value="air">Air Travel</option>
                <option value="public">Public Transport</option>
              </select>
              {errors.travelType && <span className="text-red-500 text-sm">{errors.travelType.message}</span>}
            </div>

            <div className="form-field ml-auto col-span-2">
              <button
                type="submit"
                className="p-2 h-10 w-30 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Calculate'
                )}
              </button>
            </div>

          </div>
        </form>

        {calculatedCarbonFootprint && (
          <div className="mt-4 p-4 bg-blue-100 rounded-md">
            <h3 className="text-xl font-bold text-blue-700">
              Your Carbon Footprint: {calculatedCarbonFootprint} kg CO₂
            </h3>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
