import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientsList() {

    const patients = usePatientStore((state) => state.patients)
    
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Manage your {''}
                        <span className="text-indigo-600 font-bold">Patients and Appointments</span>
                    </p>
                    {patients.map( patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">There are no patients</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Add patients {''}
                        <span className="text-indigo-600 font-bold">they will appear here</span>
                    </p>
                </>
            )}
        </div>
    )
}
