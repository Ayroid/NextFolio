"use client";

import useGsapStagger from "@/utils/useGsapStagger";
import { Flex, Tooltip } from "@radix-ui/themes";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
  useGsapStagger(".socialIcons", 0.5, 0.5);

  return (
    <Flex align="center" justify="center" gap="4" mt="6">
      <Link href="https://www.linkedin.com/in/ayroid/">
        <Tooltip content="LinkedIn">
          <FaLinkedinIn className="socialIcons size-6 md:size-8" />
        </Tooltip>
      </Link>
      <Link href="https://github.com/ayroid">
        <Tooltip content="GitHub">
          <FaGithub className="socialIcons size-6 md:size-8" />
        </Tooltip>
      </Link>
      <Link href="https://x.com/ayroids">
        <Tooltip content="X">
          <FaXTwitter className="socialIcons size-6 md:size-8" />
        </Tooltip>
      </Link>
    </Flex>
  );
};

export default SocialMediaLinks;
