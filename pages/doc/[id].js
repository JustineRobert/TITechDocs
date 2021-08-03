import TextEditor from "../../components/TextEditor";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { getSession, signOut, useSession } from "next-auth/client";
import Login from "../../components/Login";

function Doc() {
  const [session] = useSession();
    if (!session) return <Login />;
    const router = useRouter();
    const { id } = router.query;
    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(session.user.email).collection('docs').doc(id));

      //Redirect the user if tries to access URL s/he doesn't have access to.
    if (!loadingSnapshot && !snapshot.data()?.fileName) {
        router.replace("/");
    }


  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span conClick={() => router.push("/")} className="cursor-pointer">
        <Icon name="description" size="5xl" color="blue" />
        </span>

        <div className="flex-grow px-2">
            <h2>{snapshot?.data()?.fileName}</h2>
            <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                <p className="cursor-pointer hover:bg-gray-100 transit duration-200 ease-out p-2 rouded-lg">File</p>
                <p className="cursor-pointer hover:bg-gray-100 transit duration-200 ease-out p-2 rouded-lg">Edit</p>
                <p className="cursor-pointer hover:bg-gray-100 transit duration-200 ease-out p-2 rouded-lg">View</p>
                <p className="cursor-pointer hover:bg-gray-100 transit duration-200 ease-out p-2 rouded-lg">Insert</p>
                <p className="cursor-pointer hover:bg-gray-100 transit duration-200 ease-out p-2 rouded-lg">Format</p>
                <p className="cursor-pointer hover:bg-gray-100 transit duration-200 ease-out p-2 rouded-lg">Tools</p>
            </div>
        </div>

        <Button 
        color="lightBlue"
        buttonType="filled"
        size="regular"
        className="hidden md:!inline-flex h-10"
        rounded={false}
        block={false}
        iconOnly={false}
        ripple="light"
        >
            <Icon name="people" size="md" /> SHARE
        </Button>

        <img className="cursor-pointer rounded-full h-10 w-10 ml-2" src={session.user.image} alt="TITech Africa" />
    </header>

    <TextEditor />
    </div>
  )
}

export default Doc;
