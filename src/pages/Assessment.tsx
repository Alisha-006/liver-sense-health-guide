
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PatientData } from "@/lib/types";
import { predictLiverDisease } from "@/lib/predictionModel";

// Define form schema
const formSchema = z.object({
  age: z.coerce.number().min(18, "Age must be at least 18").max(120, "Age must be less than 120"),
  gender: z.enum(["male", "female"]),
  totalBilirubin: z.coerce.number().min(0, "Cannot be negative").max(30, "Value seems too high"),
  directBilirubin: z.coerce.number().min(0, "Cannot be negative").max(15, "Value seems too high"),
  alkalinePhosphatase: z.coerce.number().min(0, "Cannot be negative").max(1000, "Value seems too high"),
  alamineAminotransferase: z.coerce.number().min(0, "Cannot be negative").max(1000, "Value seems too high"),
  aspartateAminotransferase: z.coerce.number().min(0, "Cannot be negative").max(1000, "Value seems too high"),
  totalProteins: z.coerce.number().min(0, "Cannot be negative").max(15, "Value seems too high"),
  albumin: z.coerce.number().min(0, "Cannot be negative").max(10, "Value seems too high"),
  albuminGlobulinRatio: z.coerce.number().min(0, "Cannot be negative").max(10, "Value seems too high"),
});

const Assessment = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 40,
      gender: "male",
      totalBilirubin: 0.9,
      directBilirubin: 0.2,
      alkalinePhosphatase: 80,
      alamineAminotransferase: 30,
      aspartateAminotransferase: 30,
      totalProteins: 7.0,
      albumin: 4.0,
      albuminGlobulinRatio: 1.5,
    },
  });

  // Form submission handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Process the form data
      const patientData: PatientData = {
        ...values,
        gender: values.gender as 'male' | 'female',
      };
      
      // Get prediction result
      const result = predictLiverDisease(patientData);
      
      // Store result in session storage to access on results page
      sessionStorage.setItem('assessmentData', JSON.stringify(patientData));
      sessionStorage.setItem('predictionResult', JSON.stringify(result));
      
      // Navigate to results page
      navigate('/results');
    } catch (error) {
      console.error("Error processing assessment:", error);
      toast.error("There was an error processing your assessment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-3xl font-bold text-gray-900 text-center">Liver Health Assessment</h1>
              <p className="mt-2 text-sm text-gray-600 text-center">
                Enter your clinical test results to receive a liver health risk assessment.
                All fields are required for an accurate analysis.
              </p>
              
              <div className="mt-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                        
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="40" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gender</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Bilirubin Tests */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Bilirubin Tests</h2>
                        
                        <FormField
                          control={form.control}
                          name="totalBilirubin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Total Bilirubin (mg/dL)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" placeholder="0.9" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="directBilirubin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Direct Bilirubin (mg/dL)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" placeholder="0.2" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Enzyme Tests */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Enzyme Tests</h2>
                        
                        <FormField
                          control={form.control}
                          name="alkalinePhosphatase"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Alkaline Phosphatase (ALP) (IU/L)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="80" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="alamineAminotransferase"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Alamine Aminotransferase (SGPT) (IU/L)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="30" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="aspartateAminotransferase"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Aspartate Aminotransferase (SGOT) (IU/L)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="30" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Protein Tests */}
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Protein Tests</h2>
                        
                        <FormField
                          control={form.control}
                          name="totalProteins"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Total Proteins (g/dL)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" placeholder="7.0" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="albumin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Albumin (g/dL)</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" placeholder="4.0" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="albuminGlobulinRatio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Albumin/Globulin Ratio</FormLabel>
                              <FormControl>
                                <Input type="number" step="0.1" placeholder="1.5" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <Button 
                        type="submit" 
                        className="bg-medical-green hover:bg-opacity-90 text-white w-full max-w-xs"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Submit Assessment"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-900">Important Notes</h2>
              <ul className="mt-4 text-sm text-gray-600 list-disc ml-5 space-y-2">
                <li>This assessment is for educational purposes only.</li>
                <li>The results should not be used as a substitute for professional medical advice.</li>
                <li>The prediction model is simplified and may not reflect all clinical considerations.</li>
                <li>Always consult with a healthcare provider about your liver test results.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
