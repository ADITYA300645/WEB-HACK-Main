import React from 'react';
import NavigationBar from '@/utils/Navigation/NavigationBar';

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-screenbg-another-color">
     
      <div className="bg-custom-color shadow-lg rounded-lg p-6 w-96  mt-28">
        <div className="flex justify-center mb-6">
          <img
            src="https://gitpod.io/images/logo.svg"
            alt="Gitpod"
            className="h-10"
          />
        </div>
        <h2 className="text-xl font-bold text-center mb-4">Authorize through Github</h2>
        <p className="text-center text-gray-500 mb-8">Gitpod by <a href="https://gitpod.io" className="text-blue-500">gitpod-io</a> wants to access your gp-test1 account</p>

        <div className="flex items-center justify-between mb-4">
          <p className="font-bold">Personal user data</p>
          <p className="text-gray-500 text-sm">Email addresses (read-only)</p>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-white hover:text-black hover:bg-gray-100">Cancel</button>
          <a className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" href='https://web-hack-backend-git-main-aditya-yadavs-projects-38396062.vercel.app/auth/github'>Authorize through Github</a>
        </div>

        <p className="text-gray-500 text-sm text-center mt-6">
          Authorizing will redirect to <a href="https://gitpod.io" className="text-blue-500">https://gitpod.io</a>
        </p>

        <div className="mt-6 flex justify-between text-gray-400 text-sm">
          <p>Not owned or operated by GitHub</p>
          <p>Created 5 years ago</p>
          <p>More than 1k GitHub users</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
