import * as React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

function GoogleLogin({ textColor = '#1A1A1A', bgColor = '#F8F8F8', size = 90, ...props }) {
  return (
    <Svg height={size} viewBox='0 0 303 88' {...props}>
      <G transform='translate(-56 -295)'>
        <Rect width={303} height={88} rx={44} transform='translate(56 295)' fill={bgColor} />
        <Path d='M128.822 336.941a20.909 20.909 0 00-.515-4.988h-22.908v9.055h13.45a11.924 11.924 0 01-4.988 7.916l-.046.3 7.243 5.611.5.05c4.609-4.256 7.266-10.519 7.266-17.947' fill='#4285f4' />
        <Path d='M105.4 360.799a23.256 23.256 0 0016.158-5.91l-7.7-5.964a14.441 14.441 0 01-8.458 2.44 14.689 14.689 0 01-13.881-10.14l-.286.024-7.532 5.829-.1.274a24.382 24.382 0 0021.8 13.447' fill='#34a853' />
        <Path d='M91.519 341.225a15.021 15.021 0 01-.813-4.826 15.784 15.784 0 01.786-4.826l-.014-.323-7.626-5.922-.25.119a24.348 24.348 0 000 21.905l7.916-6.127' fill='#fbbc05' />
        <Path d='M105.4 321.434a13.523 13.523 0 019.434 3.633l6.886-6.723A23.442 23.442 0 00105.4 312a24.381 24.381 0 00-21.8 13.447l7.889 6.127a14.749 14.749 0 0113.911-10.14' fill='#eb4335' />
        <Path
          d='M152.47 328.248h2.97v12.936h6.666V344h-9.636zm16.5 4.62a6 6 0 012.3.429 5.442 5.442 0 011.8 1.188 5.416 5.416 0 011.191 1.815 6.081 6.081 0 01.429 2.31 6.081 6.081 0 01-.429 2.31 5.416 5.416 0 01-1.188 1.815 5.442 5.442 0 01-1.8 1.188 6 6 0 01-2.3.429 6 6 0 01-2.3-.429 5.442 5.442 0 01-1.8-1.188 5.416 5.416 0 01-1.194-1.815 6.081 6.081 0 01-.429-2.31 6.081 6.081 0 01.429-2.31 5.416 5.416 0 011.188-1.815 5.442 5.442 0 011.8-1.188 6 6 0 012.303-.429zm0 8.822a2.822 2.822 0 001.067-.209 2.721 2.721 0 00.913-.6 2.868 2.868 0 00.627-.968 3.442 3.442 0 00.231-1.3 3.442 3.442 0 00-.231-1.3 2.868 2.868 0 00-.627-.968 2.721 2.721 0 00-.913-.605 2.822 2.822 0 00-1.067-.21 2.8 2.8 0 00-1.078.209 2.75 2.75 0 00-.9.605 2.868 2.868 0 00-.627.968 3.442 3.442 0 00-.231 1.3 3.442 3.442 0 00.231 1.3 2.868 2.868 0 00.627.968 2.75 2.75 0 00.9.6 2.8 2.8 0 001.078.21zm12.54 7.41a6.425 6.425 0 01-2.035-.3 5.783 5.783 0 01-1.551-.77 5.178 5.178 0 01-1.1-1.045 4.078 4.078 0 01-.638-1.144l2.75-1.1a2.617 2.617 0 001.012 1.331 2.74 2.74 0 001.562.473 2.747 2.747 0 002.156-.885 3.524 3.524 0 00.792-2.43v-.748h-.176a3.529 3.529 0 01-1.331 1.111A4.354 4.354 0 01181 344a4.722 4.722 0 01-1.881-.392 4.932 4.932 0 01-1.617-1.122 5.785 5.785 0 01-1.144-1.754 5.737 5.737 0 01-.44-2.287 5.817 5.817 0 01.44-2.3 5.752 5.752 0 011.144-1.765 4.932 4.932 0 011.617-1.122 4.722 4.722 0 011.881-.39 4.354 4.354 0 011.947.407 3.529 3.529 0 011.331 1.111h.176v-1.166h2.75v10.01a6.8 6.8 0 01-.418 2.453 5.3 5.3 0 01-1.166 1.848 5.061 5.061 0 01-1.789 1.169 6.347 6.347 0 01-2.321.4zm.11-7.7a2.949 2.949 0 001.045-.194 2.669 2.669 0 00.913-.572 2.85 2.85 0 00.638-.929 3.115 3.115 0 00.242-1.264 3.192 3.192 0 00-.242-1.274 2.823 2.823 0 00-.638-.94 2.669 2.669 0 00-.913-.572 2.949 2.949 0 00-1.045-.194 2.861 2.861 0 00-1.034.194 2.615 2.615 0 00-.9.583 2.979 2.979 0 00-.638.94 3.114 3.114 0 00-.248 1.267 3.115 3.115 0 00.242 1.264 2.85 2.85 0 00.638.929 2.694 2.694 0 00.9.572 2.861 2.861 0 001.04.19zm9.658-9.636a1.831 1.831 0 01-.715-.143 1.833 1.833 0 01-.594-.4 1.867 1.867 0 01-.4-.583 1.807 1.807 0 01-.143-.726 1.807 1.807 0 01.143-.726 1.867 1.867 0 01.4-.583 1.833 1.833 0 01.594-.4 1.831 1.831 0 01.715-.143 1.819 1.819 0 011.32.539 1.764 1.764 0 01.55 1.309 1.764 1.764 0 01-.55 1.309 1.819 1.819 0 01-1.32.551zM189.848 344v-10.78h2.882V344zm8.228-9.372h.176a3.653 3.653 0 011.364-1.287 3.988 3.988 0 011.958-.473 4.491 4.491 0 011.782.33 3.264 3.264 0 011.265.935 4.129 4.129 0 01.748 1.452 6.558 6.558 0 01.253 1.881V344h-2.882v-6.182a2.481 2.481 0 00-.517-1.727 1.948 1.948 0 00-1.507-.561 2.1 2.1 0 00-1.045.253 2.44 2.44 0 00-.77.682 3.086 3.086 0 00-.484 1.012 4.545 4.545 0 00-.165 1.243V344h-2.882v-10.78h2.706zm13.618-1.408h3.234l1.782 6.754h.154L219 333.22h2.97l2.156 6.754h.154l1.76-6.754h3.19L225.774 344h-3.1l-2.156-6.8h-.154l-2.158 6.8h-3.058zm20.46-1.452a1.831 1.831 0 01-.715-.143 1.833 1.833 0 01-.594-.4 1.867 1.867 0 01-.4-.583 1.807 1.807 0 01-.143-.726 1.807 1.807 0 01.143-.726 1.867 1.867 0 01.4-.583 1.833 1.833 0 01.594-.4 1.831 1.831 0 01.715-.143 1.819 1.819 0 011.32.539 1.764 1.764 0 01.55 1.309 1.764 1.764 0 01-.55 1.309 1.819 1.819 0 01-1.32.547zM230.724 344v-10.78h2.882V344zm6.6-8.316h-1.892v-2.464h1.892v-3.3h2.882v3.3h2.64v2.464h-2.64v4.308a3.129 3.129 0 00.077.714 1.161 1.161 0 00.3.555 1.091 1.091 0 00.88.363 1.851 1.851 0 00.594-.077 1.857 1.857 0 00.418-.209l.811 2.53a4.751 4.751 0 01-1.086.363 6.345 6.345 0 01-1.29.121 3.928 3.928 0 01-1.463-.258 3.112 3.112 0 01-1.089-.708 3.837 3.837 0 01-1.034-2.874zm7.744-7.436h2.882v4.422l-.176 1.958h.176a3.572 3.572 0 011.331-1.265 3.863 3.863 0 011.947-.495 3.748 3.748 0 013.091 1.232 5.188 5.188 0 011 3.366V344h-2.881v-6.182a2.46 2.46 0 00-.528-1.7 1.887 1.887 0 00-1.474-.588 2.163 2.163 0 00-1.056.253 2.351 2.351 0 00-.781.693 3.219 3.219 0 00-.484 1.024 4.545 4.545 0 00-.165 1.242V344h-2.882zm22.44 20.852a6.425 6.425 0 01-2.035-.3 5.783 5.783 0 01-1.551-.77 5.178 5.178 0 01-1.1-1.045 4.077 4.077 0 01-.638-1.144l2.75-1.1a2.617 2.617 0 001.012 1.331 2.74 2.74 0 001.562.473 2.747 2.747 0 002.156-.885 3.524 3.524 0 00.792-2.43v-.748h-.176a3.529 3.529 0 01-1.331 1.111A4.354 4.354 0 01267 344a4.722 4.722 0 01-1.881-.392 4.932 4.932 0 01-1.619-1.122 5.785 5.785 0 01-1.14-1.754 5.737 5.737 0 01-.44-2.287 5.817 5.817 0 01.44-2.3 5.751 5.751 0 011.14-1.763 4.932 4.932 0 011.617-1.122 4.722 4.722 0 011.883-.392 4.354 4.354 0 011.947.407 3.529 3.529 0 011.333 1.111h.176v-1.166h2.75v10.01a6.8 6.8 0 01-.418 2.453 5.3 5.3 0 01-1.166 1.848 5.061 5.061 0 01-1.793 1.169 6.347 6.347 0 01-2.321.4zm.11-7.7a2.949 2.949 0 001.045-.194 2.669 2.669 0 00.913-.572 2.85 2.85 0 00.638-.929 3.115 3.115 0 00.242-1.264 3.192 3.192 0 00-.242-1.274 2.823 2.823 0 00-.638-.94 2.669 2.669 0 00-.913-.572 2.949 2.949 0 00-1.045-.194 2.861 2.861 0 00-1.034.194 2.615 2.615 0 00-.9.583 2.979 2.979 0 00-.638.94 3.114 3.114 0 00-.246 1.267 3.115 3.115 0 00.242 1.264 2.85 2.85 0 00.638.929 2.694 2.694 0 00.9.572 2.861 2.861 0 001.038.19zm13.046-8.536a6 6 0 012.3.429 5.442 5.442 0 011.8 1.188 5.416 5.416 0 011.191 1.819 6.081 6.081 0 01.429 2.31 6.081 6.081 0 01-.429 2.31 5.416 5.416 0 01-1.188 1.815 5.442 5.442 0 01-1.8 1.188 6 6 0 01-2.3.429 6 6 0 01-2.3-.429 5.442 5.442 0 01-1.8-1.188 5.416 5.416 0 01-1.194-1.815 6.081 6.081 0 01-.429-2.31 6.081 6.081 0 01.429-2.31 5.416 5.416 0 011.188-1.815 5.442 5.442 0 011.8-1.188 6 6 0 012.303-.429zm0 8.822a2.822 2.822 0 001.067-.209 2.721 2.721 0 00.913-.6 2.868 2.868 0 00.627-.968 3.442 3.442 0 00.231-1.3 3.442 3.442 0 00-.231-1.3 2.868 2.868 0 00-.627-.968 2.721 2.721 0 00-.913-.605 2.822 2.822 0 00-1.067-.209 2.8 2.8 0 00-1.078.209 2.75 2.75 0 00-.9.605 2.868 2.868 0 00-.627.968 3.442 3.442 0 00-.231 1.3 3.442 3.442 0 00.231 1.3 2.868 2.868 0 00.627.968 2.75 2.75 0 00.9.6 2.8 2.8 0 001.078.213zm12.672-8.822a6 6 0 012.3.429 5.442 5.442 0 011.8 1.188 5.416 5.416 0 011.191 1.819 6.081 6.081 0 01.429 2.31 6.081 6.081 0 01-.429 2.31 5.416 5.416 0 01-1.188 1.815 5.442 5.442 0 01-1.8 1.188 6 6 0 01-2.3.429 6 6 0 01-2.3-.429 5.442 5.442 0 01-1.8-1.188 5.416 5.416 0 01-1.194-1.815 6.081 6.081 0 01-.429-2.31 6.081 6.081 0 01.429-2.31 5.416 5.416 0 011.188-1.815 5.442 5.442 0 011.8-1.188 6 6 0 012.303-.429zm0 8.822a2.822 2.822 0 001.064-.205 2.721 2.721 0 00.913-.6 2.868 2.868 0 00.627-.968 3.442 3.442 0 00.231-1.3 3.442 3.442 0 00-.231-1.3 2.868 2.868 0 00-.627-.968 2.721 2.721 0 00-.913-.605 2.822 2.822 0 00-1.067-.209 2.8 2.8 0 00-1.078.209 2.75 2.75 0 00-.9.605 2.868 2.868 0 00-.627.968 3.442 3.442 0 00-.231 1.3 3.442 3.442 0 00.231 1.3 2.868 2.868 0 00.627.968 2.75 2.75 0 00.9.6 2.8 2.8 0 001.081.209zm12.54 7.414a6.425 6.425 0 01-2.035-.3 5.783 5.783 0 01-1.551-.77 5.178 5.178 0 01-1.1-1.045 4.077 4.077 0 01-.638-1.144l2.748-1.093a2.617 2.617 0 001.012 1.331 2.74 2.74 0 001.562.473 2.747 2.747 0 002.156-.885 3.524 3.524 0 00.794-2.437v-.748h-.176a3.529 3.529 0 01-1.331 1.111 4.354 4.354 0 01-1.947.407 4.722 4.722 0 01-1.881-.392 4.932 4.932 0 01-1.617-1.122 5.785 5.785 0 01-1.144-1.754 5.738 5.738 0 01-.44-2.287 5.817 5.817 0 01.44-2.3 5.751 5.751 0 011.144-1.765 4.932 4.932 0 011.617-1.122 4.722 4.722 0 011.881-.392 4.354 4.354 0 011.947.407 3.529 3.529 0 011.331 1.111h.176v-1.164h2.75v10.01a6.8 6.8 0 01-.418 2.453 5.3 5.3 0 01-1.166 1.848 5.061 5.061 0 01-1.79 1.169 6.347 6.347 0 01-2.324.4zm.11-7.7a2.949 2.949 0 001.045-.194 2.669 2.669 0 00.913-.572 2.85 2.85 0 00.638-.929 3.115 3.115 0 00.242-1.264 3.192 3.192 0 00-.242-1.274 2.823 2.823 0 00-.638-.94 2.669 2.669 0 00-.913-.572 2.949 2.949 0 00-1.045-.194 2.861 2.861 0 00-1.034.194 2.615 2.615 0 00-.9.583 2.979 2.979 0 00-.638.94 3.114 3.114 0 00-.242 1.263 3.115 3.115 0 00.242 1.264 2.85 2.85 0 00.638.929 2.694 2.694 0 00.9.572 2.861 2.861 0 001.034.194zm8.052 2.6v-15.752h2.882V344zm15.444-2.6a6.04 6.04 0 01-2.013 2.138 5.6 5.6 0 01-3.091.814 5.938 5.938 0 01-2.278-.429 5.479 5.479 0 01-1.815-1.2 5.479 5.479 0 01-1.2-1.815 6 6 0 01-.429-2.3 5.9 5.9 0 01.42-2.208 5.637 5.637 0 011.166-1.826 5.637 5.637 0 011.771-1.243 5.416 5.416 0 012.255-.462 5.871 5.871 0 012.31.429 4.713 4.713 0 011.694 1.188 5.112 5.112 0 011.034 1.793 6.921 6.921 0 01.352 2.244v.264a1.481 1.481 0 00-.022.242 1.236 1.236 0 00-.022.242H321.5a3.031 3.031 0 00.359 1.129 2.748 2.748 0 00.682.792 2.651 2.651 0 00.891.462 3.476 3.476 0 00.99.143 2.806 2.806 0 001.639-.451 3.291 3.291 0 001.023-1.133zm-2.618-4.18a1.866 1.866 0 00-.187-.638 2.246 2.246 0 00-.484-.66 2.534 2.534 0 00-.793-.502 2.927 2.927 0 00-1.133-.2 2.64 2.64 0 00-1.628.528 2.787 2.787 0 00-.99 1.474z'
          fill={textColor}
        />
      </G>
    </Svg>
  );
}

export default GoogleLogin;