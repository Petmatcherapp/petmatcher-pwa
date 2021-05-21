import AnimalIcon from "../Components/Images/Svgs/Nav/AnimalIcon";
import PostIcon from "../Components/Images/Svgs/Nav/PostIcon";
import StoryIcon from "../Components/Images/Svgs/Nav/StoryIcon";
import GroupIcon from "../Components/Images/Svgs/Nav/GroupIcon";
import CreateNewDiv from "../Components/PageSpecific/CreateNewDiv";
import Gold from "../Components/Images/Svgs/Misc/Gold";
import TextField from "../Components/Inputs/TextField";
import ConfirmButton from "../Components/Buttons/ConfirmButton";
import WarningButton from "../Components/Buttons/WarningButton";
import Button from "../Components/Buttons/Button";
import Action from "../Components/Buttons/Action";
import Select from "../Components/Inputs/Select";
import GoldAmount from "../Components/Misc/GoldAmount";
import Loading from "../Components/Misc/Loading";
import LoadingText from "../Components/Misc/LoadingText";
import LineBreak from "../Components/Misc/LineBreak";

export async function getStaticProps() {
  return {
    props: {
      activeRoute: {
        create: true,
      },
    },
  };
}

export default function Create() {
  return (
    <main className={`align-center justify-center`}>
      <h2 className="bottom-margin-small">Create a New...</h2>
      <CreateNewDiv
        icon={<PostIcon />}
        type={"Post"}
        description={"Create a post for the 🌎 and followers 🐤 to see"}
        link={"/create/post"}
        gradientNum={3}
      />
      <CreateNewDiv
        icon={<StoryIcon />}
        type={"Story"}
        description={"Create a finite story for your followers 🐤"}
        link={"/create/story"}
        gradientNum={4}
      />
      <CreateNewDiv
        icon={<AnimalIcon />}
        type={"Animal"}
        description={"Add an animal to your list 😸... any animal!"}
        link={"/create/animal"}
        gradientNum={2}
      />
      <CreateNewDiv
        icon={<GroupIcon />}
        type={"Group"}
        description={"Create a group if posting to the 🌎 is not your thing"}
        link={"/create/group"}
        gradientNum={5}
      />
      <CreateNewDiv
        icon={<Gold width={60} />}
        type={"Emote's & Treat's"}
        description={
          "P.M.P user? Upload your own Emote's & Treat's for your subs"
        }
        link={"/create/subcontent"}
        gradientNum={6}
      />
      <TextField id="email" />
      <ConfirmButton buttonText="Checkout" />
      <WarningButton buttonText="Cancel" />
      <Button buttonText="Subcribe" gradientNum={1} />
      <GoldAmount amount={42069} />
      <Action text={"Copy Link"} />
      <Select id={"Animal"} />
      <LineBreak />
      <LoadingText />
      <Loading />
    </main>
  );
}
