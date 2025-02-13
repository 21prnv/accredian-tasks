import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  refereePhone: string;
  courseName: string;
}

interface Errors {
  referrerName?: string;
  referrerEmail?: string;
  refereeName?: string;
  refereeEmail?: string;
  refereePhone?: string;
  courseName?: string;
}

interface ReferralDialogProps {
  triggerButton: React.ReactNode;
}

const ReferralDialog: React.FC<ReferralDialogProps> = ({ triggerButton }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    courseName: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.referrerName) newErrors.referrerName = "Required";
    if (!formData.referrerEmail) newErrors.referrerEmail = "Required";
    if (!/^\S+@\S+\.\S+$/.test(formData.referrerEmail))
      newErrors.referrerEmail = "Invalid email";
    if (!formData.refereeName) newErrors.refereeName = "Required";
    if (!formData.refereeEmail) newErrors.refereeEmail = "Required";
    if (!/^\S+@\S+\.\S+$/.test(formData.refereeEmail))
      newErrors.refereeEmail = "Invalid email";
    if (!formData.refereePhone) newErrors.refereePhone = "Required";
    if (!formData.courseName) newErrors.courseName = "Required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("/api/referrals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast({
            title: "Success",
            description: "Referral submitted successfully!",
            variant: "default",
          });
          setFormData({
            referrerName: "",
            referrerEmail: "",
            refereeName: "",
            refereeEmail: "",
            refereePhone: "",
            courseName: "",
          });
        } else {
          toast({
            title: "Error",
            description: "Failed to submit referral",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Error submitting referral",
          variant: "destructive",
        });
        console.error("Error submitting referral:", error);
      }
    } else {
      setErrors(newErrors);
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name as keyof Errors]: "",
      }));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-gray-900 text-xl font-semibold">
            Refer a Friend
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Referrer Details */}
          <Card className="border-slate-200">
            <CardHeader className="bg-slate-50">
              <CardTitle className="text-lg text-gray-900">
                Your Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 bg-white">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.referrerName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.referrerName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.referrerEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.referrerEmail}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Friend's Details */}
          <Card className="border-slate-200">
            <CardHeader className="bg-slate-50">
              <CardTitle className="text-lg text-gray-900">
                Friend's Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 bg-white">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Friend's Name
                </label>
                <input
                  type="text"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.refereeName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.refereeName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Friend's Email
                </label>
                <input
                  type="email"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.refereeEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.refereeEmail}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Friend's Phone
                </label>
                <input
                  type="tel"
                  name="refereePhone"
                  value={formData.refereePhone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.refereePhone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.refereePhone}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Course Selection */}
          <Card className="border-slate-200">
            <CardHeader className="bg-slate-50">
              <CardTitle className="text-lg text-gray-900">
                Course Details
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Select Course
                </label>
                <select
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a course</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="mobile-development">Mobile Development</option>
                </select>
                {errors.courseName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.courseName}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <button
            type="submit"
            className="w-full bg-[#1a73e8] text-white py-2 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Referral
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReferralDialog;
