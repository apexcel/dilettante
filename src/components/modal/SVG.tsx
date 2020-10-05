import React from 'react';

const svg = {
    insta_logo: [
        "m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0",
        "m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0",
        "m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"
    ],
    kakao_logo: [
        "m12 0c-6.667 0-10.686 4.11-11.709 8.183-1.062 4.224.793 8.271 4.855 10.689-.903 3.276-1.45 4.376-.587 4.965.968.662 2.362-.707 4.691-2.494l.957-.733c3.749.486 7.568-.593 10.272-2.913 2.27-1.948 3.52-4.553 3.52-7.334.001-5.715-5.382-10.363-11.999-10.363zm7.504 16.558c-2.454 2.106-5.965 3.049-9.388 2.524-.479-.077-2.592 1.773-4.312 2.971.194-.735.574-1.972.943-3.353.09-.336-.063-.69-.37-.854-4.527-2.431-5.362-6.396-4.633-9.297.884-3.508 4.397-7.049 10.256-7.049 5.79 0 10.5 3.976 10.5 8.862 0 2.338-1.064 4.538-2.996 6.196z",
        "m6.5 7.75h-3c-.992 0-.993 1.5 0 1.5h.75v4.25c0 .992 1.5.993 1.5 0v-4.25h.75c.992 0 .993-1.5 0-1.5z",
        "m10.196 8.222c-.001-.003-.004-.004-.005-.007-.246-.595-1.126-.623-1.383 0-.001.002-.003.004-.004.007l-2 5c-.154.384.033.821.418.975.958.386 1.129-.971 1.386-1.446h1.785l.411 1.028c.367.92 1.764.367 1.393-.557zm-.988 3.028.292-.731.292.731z",
        "m15.5 12.75h-1.25v-4.25c0-.992-1.5-.993-1.5 0v5c0 .414.336.75.75.75h2c.992 0 .993-1.5 0-1.5z",
        "m18.25 9.689v-1.189c0-.992-1.5-.993-1.5 0v5c0 .992 1.5.993 1.5 0v-1.469c1.605 1.746 1.657 2.219 2.25 2.219.63 0 .991-.747.569-1.239l-1.857-2.163 1.823-1.823c.002-.003.005-.005.007-.008.001-.001.002-.002.003-.003.681-.706-.373-1.747-1.07-1.05z"
    ],
    homepage: [
        "M374.058,248.937c-33.07,0-59.975,26.905-59.975,59.975c0,33.07,26.905,59.975,59.975,59.975c33.07,0,59.975-26.905,59.975-59.975C434.033,275.842,407.128,248.937,374.058,248.937z M374.058,328.904c-11.023,0-19.992-8.968-19.992-19.992c0-11.023,8.968-19.992,19.992-19.992c11.023,0,19.992,8.968,19.992,19.992C394.049,319.935,385.081,328.904,374.058,328.904z",
        "M273.559,471.909H110.168c-11.023,0-19.992-8.968-19.992-19.992V197.16L256.107,53.062l90.032,78.186c9.098-1.44,18.421-2.196,27.918-2.196c11.761,0,23.256,1.159,34.386,3.346L256.107,0.106L0,222.515l26.217,30.188l23.976-20.821v220.035c0,33.07,26.905,59.975,59.975,59.975h202.577C301.662,501.584,287.814,487.926,273.559,471.909z",
        "M374.058,169.035c-76.061,0-137.942,61.85-137.942,137.875v3.611c0,38.231,21.497,82.284,63.895,130.933c30.289,34.756,60.228,59.048,61.487,60.066l12.559,10.142l12.559-10.142c1.259-1.018,31.198-25.309,61.487-60.066c42.398-48.65,63.895-92.702,63.895-130.933v-3.611C512,230.886,450.12,169.035,374.058,169.035z M374.122,459.625c-10.876-9.76-27.45-25.485-43.969-44.439c-35.363-40.577-54.055-76.77-54.055-104.664v-3.611c0-53.977,43.944-97.892,97.959-97.892s97.959,43.915,97.959,97.892v3.611h0.001C472.017,361.559,409.843,427.709,374.122,459.625z"
    ],
    naver_logo: ["M31,16A15,15,0,1,1,16,1,15,15,0,0,1,31,16ZM6.964,7.973l-.052,16L13.2,24l.026-6.473-.415-2.02,5.955,8.467,6.318.052-.026-16L18.745,8l.129,6.6.414,2.356L13.23,8,6.964,7.973Z"],
    cafe: [
        "m445.707031 14.71875c-1.203125-8.417969-8.398437-14.6875-16.902343-14.71875h-335.984376c-4.148437 0-7.695312 2.984375-8.40625 7.074219l-84.164062 484.890625c-.859375 4.972656.519531 10.074218 3.769531 13.9375 3.253907 3.867187 8.042969 6.097656 13.09375 6.097656h76.980469c8.515625-.03125 15.714844-6.3125 16.902344-14.746094l7.363281-53.519531h27.09375l7.40625 53.527344c1.191406 8.445312 8.414063 14.726562 16.941406 14.738281h85.460938c4.9375.007812 9.636719-2.121094 12.886719-5.839844 3.246093-3.71875 4.726562-8.664062 4.050781-13.554687l-6.757813-48.871094h129.117188l7.382812 53.519531c1.191406 8.433594 8.394532 14.714844 16.910156 14.746094h76.066407c4.9375 0 9.628906-2.136719 12.867187-5.855469 3.242188-3.722656 4.714844-8.660156 4.039063-13.550781zm-327.347656 411.949219c-8.515625.027343-15.71875 6.308593-16.902344 14.746093l-7.363281 53.519532-77.039062-.058594 75.390624-434.289062 50.644532 366.082031zm300.492187 68.265625-7.378906-53.53125c-1.203125-8.425782-8.402344-14.699219-16.914062-14.734375h-129.117188c-4.941406-.007813-9.640625 2.128906-12.886718 5.855469-3.246094 3.722656-4.71875 8.671874-4.035157 13.566406l6.742188 48.84375h-85.460938l-66.152343-477.867188h325.121093l66.148438 477.867188zm0 0",
        "m445.707031 14.71875c-1.203125-8.417969-8.398437-14.6875-16.902343-14.71875h-335.984376c-4.148437 0-7.695312 2.984375-8.40625 7.074219l-84.164062 484.890625c-.859375 4.972656.519531 10.074218 3.769531 13.9375 3.253907 3.867187 8.042969 6.097656 13.09375 6.097656h76.980469c8.515625-.03125 15.714844-6.3125 16.902344-14.746094l7.363281-53.519531h27.09375l7.40625 53.527344c1.191406 8.445312 8.414063 14.726562 16.941406 14.738281h85.460938c4.9375.007812 9.636719-2.121094 12.886719-5.839844 3.246093-3.71875 4.726562-8.664062 4.050781-13.554687l-6.757813-48.871094h129.117188l7.382812 53.519531c1.191406 8.433594 8.394532 14.714844 16.910156 14.746094h76.066407c4.9375 0 9.628906-2.136719 12.867187-5.855469 3.242188-3.722656 4.714844-8.660156 4.039063-13.550781zm-327.347656 411.949219c-8.515625.027343-15.71875 6.308593-16.902344 14.746093l-7.363281 53.519532-77.039062-.058594 75.390624-434.289062 50.644532 366.082031zm300.492187 68.265625-7.378906-53.53125c-1.203125-8.425782-8.402344-14.699219-16.914062-14.734375h-129.117188c-4.941406-.007813-9.640625 2.128906-12.886718 5.855469-3.246094 3.722656-4.71875 8.671874-4.035157 13.566406l6.742188 48.84375h-85.460938l-66.152343-477.867188h325.121093l66.148438 477.867188zm0 0",
        "m399.464844 288.308594c4.90625-5.398438 7.085937-12.734375 5.921875-19.933594-3.632813-20.601562-32.988281-31.574219-52.734375-36.753906 1.082031-7.382813.96875-14.890625-.332032-22.238282l-2.722656-15.429687c3.679688 1.480469 7.605469 2.265625 11.570313 2.3125 4.414062.015625 8.769531-1.015625 12.707031-3.011719 10.238281-5.433594 15.648438-16.984375 13.269531-28.332031-3.097656-16.164063-17.046875-27.984375-33.503906-28.386719h-132.265625c-4.644531-.046875-9.070312 1.96875-12.082031 5.503906-2.996094 3.636719-4.222657 8.414063-3.347657 13.046876l10.53125 59.730468c1.136719 6.230469 3.042969 12.292969 5.683594 18.050782-27.210937 8.59375-41.222656 22.363281-38.398437 38.46875 5.117187 28.839843 64.28125 44.371093 117.390625 44.371093 45.746094.027344 84.335937-10.742187 98.3125-27.398437zm-29.132813-120.421875c1.082031 3.984375-.675781 8.199219-4.265625 10.238281-1.515625.75-3.191406 1.128906-4.882812 1.109375-3.433594-.082031-6.753906-1.242187-9.496094-3.3125l-.554688-.375c-3.402343-2.628906-5.757812-6.386719-6.640624-10.597656l-2.011719-11.347657h11.160156c8.167969.40625 15.027344 6.277344 16.691406 14.285157zm-45.226562-14.285157 2.5625 14.273438 7.832031 44.441406c2.738281 13.292969-.433594 27.117188-8.6875 37.890625-7.445312 8.984375-18.476562 14.226563-30.148438 14.328125-30.816406-.640625-57.105468-22.488281-63.375-52.667968l-10.277343-58.265626zm-124.585938 114.773438c-.988281-5.574219 8.285157-14.175781 30.488281-20.414062 14.988282 20.578124 38.695313 33.011718 64.144532 33.640624h2.007812c16.636719-.203124 32.332032-7.738281 42.898438-20.59375 3.167968-3.933593 5.800781-8.273437 7.832031-12.902343 26.195313 6.757812 39.527344 16.648437 40.6875 23.253906.265625 2.226563-.542969 4.445313-2.183594 5.972656-8.628906 10.242188-38.964843 21.335938-85.179687 21.335938-59.050782 0-98.390625-17.648438-100.628906-30.292969zm0 0",
        "m224.097656 96.308594c2.558594 1.882812 3.351563 4.207031 2.859375 5.433594l-2.433593 5.972656c-1.757813 4.359375.335937 9.316406 4.683593 11.09375 1.023438.421875 2.117188.636718 3.21875.632812 3.472657.003906 6.601563-2.101562 7.910157-5.316406l2.421874-5.972656c3.410157-9.453125-.089843-20.007813-8.464843-25.558594-2.386719-1.773438-3.589844-4.265625-2.738281-5.707031l7.679687-12.800781c2.324219-4.03125.992187-9.179688-2.996094-11.578126-3.988281-2.394531-9.160156-1.15625-11.628906 2.789063l-7.679687 12.800781c-5.355469 9.828125-2.230469 22.125 7.167968 28.210938zm0 0",
        "m258.230469 96.308594c2.558593 1.882812 3.355469 4.207031 2.859375 5.433594l-2.433594 5.972656c-1.757812 4.359375.335938 9.316406 4.6875 11.09375 1.019531.421875 2.113281.636718 3.214844.632812 3.472656.003906 6.601562-2.101562 7.910156-5.316406l2.425781-5.972656c3.40625-9.453125-.089843-20.007813-8.464843-25.558594-2.390626-1.773438-3.59375-4.265625-2.742188-5.707031l7.679688-12.800781c2.324218-4.03125.992187-9.179688-2.996094-11.578126-3.988282-2.394531-9.160156-1.15625-11.628906 2.789063l-7.679688 12.800781c-5.351562 9.828125-2.230469 22.125 7.167969 28.210938zm0 0",
        "m292.363281 96.308594c2.5625 1.882812 3.355469 4.207031 2.859375 5.433594l-2.433594 5.972656c-1.757812 4.359375.335938 9.316406 4.6875 11.09375 1.019532.421875 2.113282.636718 3.214844.632812 3.472656.003906 6.601563-2.101562 7.910156-5.316406l2.425782-5.972656c3.40625-9.453125-.089844-20.007813-8.464844-25.558594-2.390625-1.773438-3.59375-4.265625-2.742188-5.707031l7.683594-12.800781c2.320313-4.03125.988282-9.179688-3-11.578126-3.988281-2.394531-9.160156-1.15625-11.628906 2.789063l-7.679688 12.800781c-5.351562 9.828125-2.230468 22.125 7.167969 28.210938zm0 0",
        "m418.121094 332.800781h-204.800782c-4.714843 0-8.535156 3.820313-8.535156 8.53125 0 4.714844 3.820313 8.535157 8.535156 8.535157h204.800782c4.710937 0 8.53125-3.820313 8.53125-8.535157 0-4.710937-3.820313-8.53125-8.53125-8.53125zm0 0",
        "m372.9375 366.933594h-102.402344c-4.710937 0-8.53125 3.820312-8.53125 8.53125 0 4.714844 3.820313 8.535156 8.53125 8.535156h102.402344c4.710938 0 8.53125-3.820312 8.53125-8.535156 0-4.710938-3.820312-8.53125-8.53125-8.53125zm0 0"
    ],
    blog: [
        "m444.464844 4.394531c-5.855469-5.859375-15.355469-5.859375-21.210938 0l-115.605468 115.605469h-262.148438c-24.8125 0-45 20.1875-45 45v209.996094c0 24.816406 20.1875 45 45 45h16v77c0 6.097656 3.691406 11.589844 9.335938 13.890625 5.726562 2.335937 12.183593.894531 16.386718-3.398438l85.585938-87.492187h174.691406c24.8125 0 45-20.183594 45-45v-170.144532l115.605469-115.605468c5.855469-5.859375 5.855469-15.355469 0-21.214844zm-137.886719 243.949219-42.425781-42.425781 127.28125-127.277344 42.425781 42.425781zm-58.40625-15.980469 31.960937 31.960938-54.78125 22.820312zm114.328125 142.632813c0 8.273437-6.730469 15-15 15h-181c-4.035156 0-7.902344 1.628906-10.722656 4.511718l-64.277344 65.707032v-55.21875c0-8.28125-6.714844-15-15-15h-31c-8.269531 0-15-6.726563-15-15v-209.996094c0-8.273438 6.730469-15 15-15h232.144531l-45.3125 45.3125c-1.25 1.25-2.488281 2.972656-3.3125 5.011719l-41.519531 99.675781h-81c-8.285156 0-15 6.714844-15 15 0 8.28125 6.714844 14.988281 15 14.988281h90.992188.011718c1.929688 0 4-.394531 5.894532-1.207031l108.773437-45.304688c1.8125-.707031 3.640625-1.9375 5.015625-3.3125l45.3125-45.3125zm92.570312-275.144532-42.425781-42.425781 21.214844-21.210937 42.425781 42.425781zm0 0"
    ],
    call: [
        "M121.43,0H52.809C40.582,0,30.635,9.947,30.635,22.174v129.892c0,12.227,9.947,22.174,22.174,22.174h68.621c12.227,0,22.174-9.947,22.174-22.174V22.174C143.604,9.947,133.657,0,121.43,0z M128.669,152.066c0,3.991-3.248,7.239-7.239,7.239H52.809c-3.991,0-7.239-3.248-7.239-7.239V22.174c0-3.991,3.248-7.239,7.239-7.239h68.621c3.991,0,7.239,3.248,7.239,7.239V152.066z",
        "M98.977,26.165H75.693c-3.437,0-6.223,2.786-6.223,6.223c0,3.437,2.786,6.223,6.223,6.223h23.285c3.437,0,6.223-2.786,6.223-6.223C105.2,28.951,102.414,26.165,98.977,26.165z"
    ],
    location_marker: [
        "M87.122,0C53.351,0,25.878,27.473,25.878,61.244c0,38.798,23.851,112.995,61.244,112.995s61.241-74.198,61.241-112.995C148.364,27.473,120.891,0,87.122,0z M87.122,159.305c-21.916,0-46.309-58.451-46.309-98.061c0-25.535,20.774-46.309,46.309-46.309c25.533,0,46.307,20.774,46.307,46.309C133.429,100.854,109.036,159.305,87.122,159.305z",
        "M164.75,159.305h-35.453c-4.125,0-7.467,3.342-7.467,7.467c0,4.125,3.342,7.467,7.467,7.467h35.453c4.125,0,7.467-3.342,7.467-7.467C172.217,162.647,168.875,159.305,164.75,159.305z",
        "M44.943,159.305H9.49c-4.125,0-7.467,3.342-7.467,7.467c0,4.125,3.342,7.467,7.467,7.467h35.453c4.125,0,7.467-3.342,7.467-7.467C52.41,162.647,49.068,159.305,44.943,159.305z",
        "M87.12,38.005c-13.481,0-24.449,10.968-24.449,24.451c0,13.481,10.968,24.449,24.449,24.449s24.449-10.968,24.449-24.449C111.569,48.973,100.601,38.005,87.12,38.005z M87.12,71.971c-5.246,0-9.514-4.268-9.514-9.514c0-5.248,4.268-9.517,9.514-9.517s9.514,4.268,9.514,9.517C96.634,67.702,92.365,71.971,87.12,71.971z"
    ],
    time: [
        "M87.12,174.239C39.082,174.239,0,135.157,0,87.12S39.082,0,87.12,0s87.12,39.082,87.12,87.12S135.157,174.239,87.12,174.239z M87.12,14.935c-39.802,0-72.185,32.383-72.185,72.185s32.383,72.185,72.185,72.185s72.185-32.383,72.185-72.185S126.921,14.935,87.12,14.935z",
        "M125.32,94.587h-38.2c-4.125,0-7.467-3.345-7.467-7.467V40.794c0-4.123,3.342-7.467,7.467-7.467s7.467,3.345,7.467,7.467v38.859h30.733c4.125,0,7.467,3.345,7.467,7.467S129.445,94.587,125.32,94.587z"
    ]
};

export default function SVG({ name, width, height, color, viewBox }) {

    const renderPath = (name, color) => {
        return svg[name].map((el, idx) => {
            return (
                <path
                    key={idx}
                    fill={color}
                    d={el}
                />
            );
        });
    };

    return (
        <svg
            x="0px"
            y="0px"
            width={width ? width : "auto"}
            height={height ? height : "auto"}
            viewBox={viewBox ? viewBox : "0 0 512 512"}
        >
        {renderPath(name, color)}
        </svg>
    );
}