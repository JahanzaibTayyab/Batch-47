import MyButton from "@/components/ReactLearning/button";
import AboutPage from "@/components/ReactLearning/aboutPage";
import Profile from "@/components/ReactLearning/Profile";
import ConditionalRendering from "@/components/ReactLearning/conditionalRendering";
import ShoppingList from "@/components/ReactLearning/RenderingList";
import { UpdateUI } from "@/components/ReactLearning/UpdateUI";
import { UpdateUIProps } from "@/components/ReactLearning/UpdateUIProps";
import ThinkingReactUI from "@/components/ReactLearning/ThinkingReactUI";

const ReactLearning = () => {
  const user = {
    name: "Jahanzaib Tayab",
    role: "Admin",
  };
  return (
    <div className="flex flex-col gap-5">
      ReactLearning
      <div className="border bg-gray-100 p-2">
        <MyButton />
      </div>
      <div className="bg-gray-200 p-2">
        About (Fragment Tag)
        <AboutPage />
      </div>
      <div className="bg-gray-300 p-5">
        User Information (variable print)
        <div>
          User Name : {user.name}
          User Role : {user.role}
        </div>
      </div>
      <div className=" flex justify-center items-center py-5">
        <Profile />
      </div>
      <div className="bg-gray-400 py-5">
        Conditional Rendering
        <ConditionalRendering />
      </div>
      <div className="bg-yellow-100 p-5">
        Rendering List
        <ShoppingList />
      </div>
      <div className="bg-yellow-600 p-5">
        Update State List
        <div className="flex justify-center items-center">
          <UpdateUI />
        </div>
      </div>
      <div className="bg-yellow-600 p-5">
        Update State and Props (to pass values from patent to child)
        <div className="flex justify-center items-center">
          <UpdateUIProps propValue={100} value1={20} value2={50} />
        </div>
      </div>
      <div>
        <ThinkingReactUI />
      </div>
    </div>
  );
};
export default ReactLearning;
