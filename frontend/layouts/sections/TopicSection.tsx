import { TopicType } from "@shared/types";
import Section from "@frontend/components/common/Section";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import Topic from "@frontend/components/Topic";
import Grid from "@frontend/components/common/Grid";

// Define static topic data (adjust the objects as needed to match your TopicType)
const topicsData: TopicType[] = [
  {
    _id: "1",
    title: "My Journey",
    desc: "I began coding in high school...\nNow I'm a professional developer.",
  },
  {
    _id: "2",
    title: "Professional Experience",
    desc: "I've worked on various projects including web and mobile apps.\nAlways learning and evolving.",
  },
  // Add more topics if desired...
];

const renderTopics = (topics: TopicType[]) => {
  if (topics && topics.length > 0) {
    return topics.map((topic: TopicType) => (
      <Topic
        key={topic._id}
        title={topic.title}
        desc={topic.desc.replace(/\\n/g, "\n")}
      />
    ));
  } else {
    return <LoadingSpinner size="100px" fontSize="64px" />;
  }
};

export default function TopicSection() {
  // Use the static topics data instead of fetching from an API
  const topics = topicsData;

  return (
    <Section id="topics" sectionStyles="w-full">
      <Grid gridStyles="grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10">
        {renderTopics(topics)}
      </Grid>
    </Section>
  );
}
