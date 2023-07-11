import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <div className="w-full bg-subGray h-[100px] flex items-center">
      {!isLoggedIn && (
        <a href="login" className="absolute right-[10px]">
          로그인
        </a>
      )}
    </div>
  );
};

export default Header;