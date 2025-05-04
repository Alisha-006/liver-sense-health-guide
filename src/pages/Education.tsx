
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Education = () => {
  const [activeTab, setActiveTab] = useState("understanding");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Liver Health Education</h1>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about liver function, common liver conditions, risk factors, and tips for maintaining liver health.
            </p>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="understanding" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent">
                <TabsTrigger 
                  value="understanding" 
                  className={`data-[state=active]:bg-medical-blue data-[state=active]:text-white`}
                >
                  Understanding the Liver
                </TabsTrigger>
                <TabsTrigger 
                  value="conditions" 
                  className={`data-[state=active]:bg-medical-blue data-[state=active]:text-white`}
                >
                  Liver Conditions
                </TabsTrigger>
                <TabsTrigger 
                  value="prevention" 
                  className={`data-[state=active]:bg-medical-blue data-[state=active]:text-white`}
                >
                  Prevention & Care
                </TabsTrigger>
                <TabsTrigger 
                  value="tests" 
                  className={`data-[state=active]:bg-medical-blue data-[state=active]:text-white`}
                >
                  Understanding Tests
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-8">
                <TabsContent value="understanding">
                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding Your Liver</CardTitle>
                      <CardDescription>Learn about the vital role your liver plays in your body</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">What is the Liver?</h3>
                        <p className="mt-2 text-gray-700">
                          The liver is the largest internal organ in your body, weighing about 3 pounds in adults. 
                          It's located on the right side of your abdomen, just beneath your ribs. 
                          This remarkable organ performs more than 500 vital functions to keep you healthy.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Key Functions</h3>
                        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-2">
                          <li><strong>Filters Blood:</strong> Removes toxins, drugs, and other harmful substances</li>
                          <li><strong>Produces Bile:</strong> Helps digest fats and carry away waste</li>
                          <li><strong>Processes Nutrients:</strong> Metabolizes carbohydrates, proteins, and fats</li>
                          <li><strong>Stores Energy:</strong> Stores sugar (glucose) as glycogen for later use</li>
                          <li><strong>Makes Proteins:</strong> Produces essential proteins for blood plasma</li>
                          <li><strong>Regulates Cholesterol:</strong> Creates and removes cholesterol</li>
                          <li><strong>Stores Vitamins:</strong> Stores vitamins A, D, E, K, and B12</li>
                          <li><strong>Blood Clotting:</strong> Produces factors needed for blood to clot properly</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Liver's Amazing Regeneration</h3>
                        <p className="mt-2 text-gray-700">
                          The liver has a remarkable ability to regenerate itself. In some cases, even if up to 75% 
                          of the liver tissue is damaged or removed, the remaining liver tissue can grow back to its 
                          original size within weeks. However, this regenerative ability can be compromised by certain 
                          conditions, including chronic liver disease.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="conditions">
                  <Card>
                    <CardHeader>
                      <CardTitle>Common Liver Conditions</CardTitle>
                      <CardDescription>Understanding various liver diseases and their impacts</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Fatty Liver Disease</h3>
                        <p className="mt-2 text-gray-700">
                          Fatty liver occurs when fat builds up in liver cells. There are two main types:
                        </p>
                        <ul className="mt-2 list-disc pl-5 text-gray-700">
                          <li><strong>Non-alcoholic fatty liver disease (NAFLD):</strong> Usually related to obesity, diabetes, or metabolic syndrome</li>
                          <li><strong>Alcoholic fatty liver disease:</strong> Caused by excessive alcohol consumption</li>
                        </ul>
                        <p className="mt-2 text-gray-700">
                          If not addressed, it can progress to inflammation (steatohepatitis) and eventually cirrhosis.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Hepatitis</h3>
                        <p className="mt-2 text-gray-700">
                          Hepatitis is inflammation of the liver, commonly caused by viral infections:
                        </p>
                        <ul className="mt-2 list-disc pl-5 text-gray-700">
                          <li><strong>Hepatitis A:</strong> Transmitted through contaminated food/water, usually resolves without treatment</li>
                          <li><strong>Hepatitis B:</strong> Transmitted through blood and bodily fluids, can become chronic</li>
                          <li><strong>Hepatitis C:</strong> Transmitted through blood, often becomes chronic, treatable with medication</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Cirrhosis</h3>
                        <p className="mt-2 text-gray-700">
                          Cirrhosis is scarring of the liver caused by long-term liver damage. As healthy liver tissue is 
                          replaced by scar tissue, the liver loses its ability to function properly. Common causes include 
                          chronic alcohol abuse, hepatitis B and C, and NAFLD. While early-stage damage can sometimes be 
                          reversed, advanced cirrhosis is often irreversible.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Other Liver Conditions</h3>
                        <ul className="mt-2 list-disc pl-5 text-gray-700">
                          <li><strong>Hemochromatosis:</strong> Iron buildup in the liver</li>
                          <li><strong>Wilson's Disease:</strong> Copper accumulation in the liver and other organs</li>
                          <li><strong>Primary Biliary Cholangitis:</strong> Slow destruction of bile ducts</li>
                          <li><strong>Liver Cancer:</strong> Often develops in the context of other liver diseases</li>
                          <li><strong>Autoimmune Hepatitis:</strong> Immune system attacks liver cells</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="prevention">
                  <Card>
                    <CardHeader>
                      <CardTitle>Prevention & Liver Care</CardTitle>
                      <CardDescription>How to maintain and improve your liver health</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Diet for Liver Health</h3>
                        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                          <li><strong>Mediterranean Diet:</strong> Rich in fruits, vegetables, whole grains, and healthy fats</li>
                          <li><strong>Coffee:</strong> Studies suggest coffee may protect the liver from disease</li>
                          <li><strong>Green Tea:</strong> Contains antioxidants that may reduce fat accumulation</li>
                          <li><strong>Foods to Emphasize:</strong> Leafy greens, berries, fatty fish, nuts, olive oil</li>
                          <li><strong>Foods to Limit:</strong> Processed foods, added sugars, red meat, fried foods</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Lifestyle Changes</h3>
                        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                          <li><strong>Limit Alcohol:</strong> Practice moderation or abstinence if you have liver issues</li>
                          <li><strong>Maintain Healthy Weight:</strong> Even modest weight loss can reduce liver fat</li>
                          <li><strong>Regular Exercise:</strong> Aim for at least 150 minutes of moderate activity weekly</li>
                          <li><strong>Avoid Toxins:</strong> Follow directions on medications and limit exposure to chemicals</li>
                          <li><strong>Safe Sex and Hygiene:</strong> Prevent hepatitis transmission</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Vaccination</h3>
                        <p className="mt-2 text-gray-700">
                          Get vaccinated against hepatitis A and B if recommended by your healthcare provider, especially if you:
                        </p>
                        <ul className="mt-2 list-disc pl-5 text-gray-700">
                          <li>Have chronic liver disease</li>
                          <li>Travel to regions with high hepatitis rates</li>
                          <li>Work in healthcare settings</li>
                          <li>Have multiple sexual partners</li>
                          <li>Use intravenous drugs</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Regular Screenings</h3>
                        <p className="mt-2 text-gray-700">
                          If you have risk factors for liver disease, talk to your healthcare provider about 
                          regular liver function tests and appropriate screenings. Early detection of liver problems 
                          greatly improves treatment outcomes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="tests">
                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding Liver Tests</CardTitle>
                      <CardDescription>A guide to common liver function tests and what they mean</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Liver Function Tests (LFTs)</h3>
                        <p className="mt-2 text-gray-700">
                          These blood tests help assess liver function and detect liver damage:
                        </p>
                        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-2">
                          <li>
                            <strong>Alanine Aminotransferase (ALT/SGPT):</strong>
                            <p className="mt-1">An enzyme primarily found in the liver. Elevated levels suggest liver cell damage.</p>
                            <p><strong>Normal range:</strong> 7-55 IU/L (may vary by lab)</p>
                          </li>
                          <li>
                            <strong>Aspartate Aminotransferase (AST/SGOT):</strong>
                            <p className="mt-1">An enzyme found in the liver and other tissues. Elevated with liver damage, but less specific than ALT.</p>
                            <p><strong>Normal range:</strong> 8-48 IU/L (may vary by lab)</p>
                          </li>
                          <li>
                            <strong>Alkaline Phosphatase (ALP):</strong>
                            <p className="mt-1">An enzyme found in liver, bone, and other tissues. Elevation may indicate bile duct obstruction.</p>
                            <p><strong>Normal range:</strong> 45-115 IU/L (may vary by lab)</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Bilirubin Tests</h3>
                        <p className="mt-2 text-gray-700">
                          Bilirubin is a yellowish pigment produced during the breakdown of red blood cells:
                        </p>
                        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-2">
                          <li>
                            <strong>Total Bilirubin:</strong>
                            <p className="mt-1">Measures all bilirubin in your blood. Elevated levels can cause jaundice (yellowing of skin).</p>
                            <p><strong>Normal range:</strong> 0.1-1.2 mg/dL (may vary by lab)</p>
                          </li>
                          <li>
                            <strong>Direct (Conjugated) Bilirubin:</strong>
                            <p className="mt-1">Measures bilirubin that has been processed by the liver. Elevation may indicate liver or bile duct problems.</p>
                            <p><strong>Normal range:</strong> 0-0.3 mg/dL (may vary by lab)</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Protein Tests</h3>
                        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-2">
                          <li>
                            <strong>Albumin:</strong>
                            <p className="mt-1">The main protein made by the liver. Low levels can indicate liver dysfunction.</p>
                            <p><strong>Normal range:</strong> 3.5-5.0 g/dL (may vary by lab)</p>
                          </li>
                          <li>
                            <strong>Total Protein:</strong>
                            <p className="mt-1">Measures all proteins in blood, including albumin and globulins.</p>
                            <p><strong>Normal range:</strong> 6.0-8.3 g/dL (may vary by lab)</p>
                          </li>
                          <li>
                            <strong>Albumin/Globulin Ratio:</strong>
                            <p className="mt-1">Compares albumin to other proteins. A low ratio may indicate liver disease.</p>
                            <p><strong>Normal range:</strong> 1.1-2.5 (may vary by lab)</p>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-4 p-4 bg-medical-lightblue rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Note:</strong> Reference ranges may vary between laboratories. Always consult with a healthcare 
                          provider for interpretation of your specific test results.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/assessment">
              <Button className="bg-medical-green hover:bg-opacity-90 text-white">
                Take a Liver Health Assessment
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
