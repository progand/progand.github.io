export default function Footer() {
  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © 2023 Andriy Lach. All rights reserved.
      </div>
      <div className="mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        Made by{" "}
        <a href="https://github.com/progand" rel="noopener" target="_blank">
          progand
        </a>
      </div>
    </div>
  );
}
