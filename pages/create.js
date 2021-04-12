import AnimalIcon from "../Components/Images/Svgs/Nav/AnimalIcon"
import PostIcon from "../Components/Images/Svgs/Nav/PostIcon"
import StoryIcon from "../Components/Images/Svgs/Nav/StoryIcon"
import GroupIcon from "../Components/Images/Svgs/Nav/GroupIcon"
import CreateNewDiv from "../Components/PageSpecific/CreateNewDiv"
import Gold from "../Components/Images/Svgs/Gold"

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
          bonusDescription={"It's not limited to your animals! You can even share social media post's you came across"}
          link={"/create/post"}
          gradientNum={3}
        />
        <CreateNewDiv
          icon={<StoryIcon />}
          type={"Story"}
          description={"Create a finite story for your followers 🐤"}
          bonusDescription={"Your choice of lasting between 30min and 48 hours, and must be about your animal"}
          link={"/create/story"}
          gradientNum={4}
        />
        <CreateNewDiv
          icon={<AnimalIcon />}
          type={"Animal"}
          description={"Add an animal to your list 😸... any animal!"}
          bonusDescription={"Maybe it's a 🐿 that likes to stop by your place for a snack 🌰"}
          link={"/create/animal"}
          gradientNum={2}
        />
        <CreateNewDiv
          icon={<GroupIcon />}
          type={"Group"}
          description={"Create a group if posting to the 🌎 is not your thing"}
          bonusDescription={"You set the rules, and can allow specific people to help you moderate"}
          link={"/create/group"}
          gradientNum={5}
        />
        <CreateNewDiv
          icon={<Gold width={50} />}
          type={"Emote"}
          description={"P.M.P user? Upload your own Treats / Emotes for your subs"}
          bonusDescription={"After users subscribe to your animal, they will be able to use them around PM :D"}
          link={"/create/subcontent"}
          gradientNum={6}
        />
    </main>
  )
}