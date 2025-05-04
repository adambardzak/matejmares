"use client";

import React from "react";
import { motion } from "framer-motion";

const leftText1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi eu velit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi eu velit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisi eu velit.\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.\n\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.`;

const leftText2 = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const imageUrl = "/hero/16.webp";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function AboutSection() {
  return (
    <section className="w-full flex min-h-screen items-center">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-2/3 max-w-7xl mx-auto py-12 gap-8 pl-4 md:pl-8">
        {/* Text columns */}
        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <motion.div
            className="whitespace-pre-line text-left text-lg md:w-1/3 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            {leftText1}
          </motion.div>
          <motion.div
            className="whitespace-pre-line text-left text-lg md:w-1/3 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {leftText2}
          </motion.div>
        </div>

        {/* Image */}
      </div>
      <motion.img
        src={imageUrl}
        alt="About section visual"
        className="object-cover w-1/3 h-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
        transition={{ delay: 0.4, duration: 1 }}
      />
    </section>
  );
}

export default AboutSection;
