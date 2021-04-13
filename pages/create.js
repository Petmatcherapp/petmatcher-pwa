import AnimalIcon from "../Components/Images/Svgs/Nav/AnimalIcon"
import PostIcon from "../Components/Images/Svgs/Nav/PostIcon"
import StoryIcon from "../Components/Images/Svgs/Nav/StoryIcon"
import GroupIcon from "../Components/Images/Svgs/Nav/GroupIcon"
import CreateNewDiv from "../Components/PageSpecific/CreateNewDiv"
import Gold from "../Components/Images/Svgs/Gold"
import TextField from "../Components/Inputs/TextField"

export async function getStaticProps() {
  return {
    props: {
      activeRoute: {
        create: true
      }
    }
  }
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
          icon={<Gold width={50} />}
          type={"Emote's & Treat's"}
          description={"P.M.P user? Upload your own Emote's & Treat's for your subs"}
          link={"/create/subcontent"}
          gradientNum={6}
        />
        <TextField id="email" />
    </main>
  )
}