// SkillsSection.js
"use client";

import {
  Badge,
  RadioCardSwitch,
  SectionHeading,
  SkillIcons,
} from "@/app/components";
import useGsapStagger from "@/utils/useGsapStagger";
import { Box, Container, Flex } from "@radix-ui/themes";
import { useState } from "react";

const SkillsSection = () => {
  const [categorySelected, setCategorySelected] = useState("All");

  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
  };

  const isVisible = (categories: string[]) => {
    return categories.includes(categorySelected) || categorySelected === "All";
  };

  const itemValueMap = [
    { value: "All", text: "All" },
    { value: "Frontend", text: "Frontend" },
    { value: "Backend", text: "Backend" },
    { value: "Language", text: "Languages" },
    { value: "DevOps", text: "DevOps" },
    { value: "Design", text: "Design" },
  ];

  useGsapStagger({ className: ".skillIcon", delay: 0.25, amount: 3 });

  const {
    ReactTooltip,
    NextJSTooltip,
    ReduxTooltip,
    NodeJSTooltip,
    ExpressTooltip,
    MongoDBTooltip,
    MongooseTooltip,
    PrismaTooltip,
    RedisTooltip,
    JavascriptTooltip,
    TypescriptTooltip,
    JavaTooltip,
    PythonTooltip,
    HtmlTooltip,
    CssTooltip,
    TailwindTooltip,
    BootstrapTooltip,
    RadixUITooltip,
    ShadcnUITooltip,
    LinuxTooltip,
    BashTooltip,
    GitTooltip,
    GithubTooltip,
    DockerTooltip,
    MavenTooltip,
    SeleniumTooltip,
    PostmanTooltip,
    JenkinsTooltip,
    GithubActionsTooltip,
    TerraformTooltip,
    AnsibleTooltip,
    PrometheusTooltip,
    GrafanaTooltip,
    NginxTooltip,
    AWSTooltip,
    NetlifyTooltip,
    VercelTooltip,
    FigmaTooltip,
  } = SkillIcons;

  return (
    <Container className="relative z-20 mx-8 md:mx-4">
      <Flex justify="center" align="center" direction="column" className="z-50">
        <Badge color="#9b00ff" text="Tech Stack" />
        <SectionHeading text="Skills &" highlight="Tools" inline />
        <RadioCardSwitch
          activeCategory={categorySelected}
          changeCategory={handleCategoryChange}
          itemValueMap={itemValueMap}
          columnCount={{ initial: "2", sm: "6" }}
        />
        <Flex
          justify="center"
          align="center"
          gap="5"
          className="w-full flex-wrap"
        >
          {isVisible(["All", "Frontend"]) && <ReactTooltip />}
          {isVisible(["All", "Frontend", "Backend"]) && <NextJSTooltip />}
          {isVisible(["All", "Frontend"]) && <ReduxTooltip />}
          {isVisible(["All", "Backend"]) && <NodeJSTooltip />}
          {isVisible(["All", "Backend"]) && <ExpressTooltip />}
          {isVisible(["All", "Backend"]) && <MongoDBTooltip />}
          {isVisible(["All", "Backend"]) && <MongooseTooltip />}
          {isVisible(["All", "Backend"]) && <PrismaTooltip />}
          {isVisible(["All", "Backend"]) && <RedisTooltip />}
          {isVisible(["All", "Frontend", "Backend", "Language"]) && (
            <JavascriptTooltip />
          )}
          {isVisible(["All", "Frontend", "Backend", "Language"]) && (
            <TypescriptTooltip />
          )}
          {isVisible(["All", "Language"]) && <JavaTooltip />}
          {isVisible(["All", "Language"]) && <PythonTooltip />}
          {isVisible(["All", "Frontend"]) && <HtmlTooltip />}
          {isVisible(["All", "Frontend"]) && <CssTooltip />}
          {isVisible(["All", "Frontend"]) && <TailwindTooltip />}
          {isVisible(["All", "Frontend"]) && <BootstrapTooltip />}
          {isVisible(["All", "Frontend"]) && <RadixUITooltip />}
          {isVisible(["All", "Frontend"]) && <ShadcnUITooltip />}
          {isVisible(["All", "DevOps"]) && <LinuxTooltip />}
          {isVisible(["All", "DevOps", "Language"]) && <BashTooltip />}
          {isVisible(["All", "DevOps"]) && <GitTooltip />}
          {isVisible(["All", "DevOps"]) && <GithubTooltip />}
          {isVisible(["All", "DevOps"]) && <DockerTooltip />}
          {isVisible(["All", "DevOps"]) && <MavenTooltip />}
          {isVisible(["All", "DevOps"]) && <SeleniumTooltip />}
          {isVisible(["All", "DevOps"]) && <PostmanTooltip />}
          {isVisible(["All", "DevOps"]) && <JenkinsTooltip />}
          {isVisible(["All", "DevOps"]) && <GithubActionsTooltip />}
          {isVisible(["All", "DevOps"]) && <TerraformTooltip />}
          {isVisible(["All", "DevOps"]) && <AnsibleTooltip />}
          {isVisible(["All", "DevOps"]) && <PrometheusTooltip />}
          {isVisible(["All", "DevOps"]) && <GrafanaTooltip />}
          {isVisible(["All", "DevOps"]) && <NginxTooltip />}
          {isVisible(["All", "DevOps"]) && <AWSTooltip />}
          {isVisible(["All", "DevOps"]) && <NetlifyTooltip />}
          {isVisible(["All", "DevOps"]) && <VercelTooltip />}
          {isVisible(["All", "Design"]) && <FigmaTooltip />}
        </Flex>
      </Flex>
      <Box className="absolute -right-40 -top-12 z-10 h-[20rem] w-[30rem] rounded-full bg-radix-accent opacity-20 blur-[96px]"></Box>
    </Container>
  );
};

export default SkillsSection;
