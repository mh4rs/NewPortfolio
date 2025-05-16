import Grid from "@frontend/components/common/Grid";
import Section from "@frontend/components/common/Section";
import SkeletonScreen from "@frontend/components/ui/SkeletonScreen";

// Define a fixed number of skeletons (e.g. 3)
const skeletonCount = 3;
const skeletonArray = Array.from({ length: skeletonCount }, (_, index) => index);

const renderProjectSkeletons = () => {
  return skeletonArray.map((item, index) => (
    <SkeletonScreen
      key={index}
      width="w-[400px]"
      height="h-[420px]"
      customStyles="rounded-xl"
    />
  ));
};

export default function ProjectSkeleton() {
  return (
    <Section id="project" contentStyles="gap-[64px]">
      <div className="title flex flex-col items-center gap-y-2">
        <SkeletonScreen
          id="heading"
          width="w-[250px]"
          height="h-[60px]"
          customStyles="rounded-lg"
        />
        <SkeletonScreen
          id="description"
          width="w-[400px]"
          height="h-[48px]"
          customStyles="rounded-lg"
        />
      </div>
      <Grid gridStyles="lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {renderProjectSkeletons()}
      </Grid>
    </Section>
  );
}
