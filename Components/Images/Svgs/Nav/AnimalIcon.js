export default function AnimalIcon({ active }) {
    return (
        <>
        {
        active ?
        <svg className="width-100 height-100" width="175" height="200" viewBox="0 0 175 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.25 50C66.6055 50 75 41.6055 75 31.25C75 20.8945 66.6055 12.5 56.25 12.5C45.8945 12.5 37.5 20.8945 37.5 31.25C37.5 41.6055 45.8945 50 56.25 50ZM37.5 75C37.5 64.6445 29.1055 56.25 18.75 56.25C8.39453 56.25 0 64.6445 0 75C0 85.3555 8.39453 93.75 18.75 93.75C29.1055 93.75 37.5 85.3555 37.5 75ZM118.75 50C129.105 50 137.5 41.6055 137.5 31.25C137.5 20.8945 129.105 12.5 118.75 12.5C108.395 12.5 100 20.8945 100 31.25C100 41.6055 108.395 50 118.75 50ZM156.25 56.25C145.895 56.25 137.5 64.6445 137.5 75C137.5 85.3555 145.895 93.75 156.25 93.75C166.605 93.75 175 85.3555 175 75C175 64.6445 166.605 56.25 156.25 56.25ZM143.48 117.492C133.211 111.695 125.066 93.5039 117.242 79.2773C111.098 68.0898 99.3008 62.5 87.5 62.5C75.6992 62.5 63.9023 68.0898 57.7539 79.2773C49.8281 93.7148 42.082 111.527 31.5156 117.492C20.168 123.898 12.5 136.008 12.5 149.98C12.5 170.688 29.2891 187.473 50 187.473C70.1992 188.16 78.1992 174.977 87.5 174.977C96.8008 174.977 104.801 188.16 125 187.473C145.711 187.473 162.5 170.688 162.5 149.98C162.5 136.008 154.832 123.898 143.48 117.492Z" fill="#3A3A3A"/>
        </svg>
        :
        <svg className="width-100 height-100" width="175" height="200" viewBox="0 0 175 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M143.48 117.492C133.211 111.695 125.066 93.5039 117.242 79.2773C111.098 68.0898 99.3008 62.5 87.5 62.5C75.6992 62.5 63.9023 68.0898 57.7539 79.2773C49.8281 93.7148 42.082 111.527 31.5156 117.492C20.168 123.898 12.5 136.008 12.5 149.98C12.5 170.688 29.2891 187.473 50 187.473C50.5117 187.488 51.0156 187.5 51.5117 187.5C70.6055 187.5 78.4336 174.977 87.5 174.977C96.5664 174.977 104.395 187.5 123.488 187.5C123.984 187.5 124.488 187.492 125 187.473C145.711 187.473 162.5 170.688 162.5 149.98C162.5 136.008 154.832 123.898 143.48 117.492ZM124.578 174.98L123.488 175C115.629 175 110.582 171.984 105.234 168.793C100.27 165.832 94.6484 162.477 87.5039 162.477C80.3594 162.477 74.7344 165.832 69.7734 168.793C64.4258 171.984 59.375 175 51.5156 175L50.0039 174.973C36.2187 174.973 25.0039 163.762 25.0039 149.98C25.0039 141.066 29.8555 132.785 37.668 128.375C49.5664 121.656 57.2109 107.094 64.6055 93.0117C65.9805 90.3906 67.3477 87.7891 68.7148 85.2969C72.2539 78.8477 79.2773 75 87.5 75C95.7227 75 102.746 78.8477 106.289 85.2969C107.582 87.6484 108.883 90.1094 110.203 92.6055C117.781 106.938 125.617 121.758 137.336 128.375C145.148 132.785 150 141.066 150 149.98C150 163.762 138.785 174.973 124.578 174.98ZM43.75 78.125C43.75 66.043 33.957 56.25 21.875 56.25C9.79297 56.25 0 66.043 0 78.125C0 90.207 9.79297 100 21.875 100C33.957 100 43.75 90.207 43.75 78.125ZM12.5 78.125C12.5 72.957 16.707 68.75 21.875 68.75C27.043 68.75 31.25 72.957 31.25 78.125C31.25 83.293 27.043 87.5 21.875 87.5C16.707 87.5 12.5 83.293 12.5 78.125ZM153.125 56.25C141.043 56.25 131.25 66.043 131.25 78.125C131.25 90.207 141.043 100 153.125 100C165.207 100 175 90.207 175 78.125C175 66.043 165.207 56.25 153.125 56.25ZM153.125 87.5C147.957 87.5 143.75 83.293 143.75 78.125C143.75 72.957 147.957 68.75 153.125 68.75C158.293 68.75 162.5 72.957 162.5 78.125C162.5 83.293 158.293 87.5 153.125 87.5ZM115.625 56.25C127.707 56.25 137.5 46.457 137.5 34.375C137.5 22.293 127.707 12.5 115.625 12.5C103.543 12.5 93.75 22.293 93.75 34.375C93.75 46.457 103.543 56.25 115.625 56.25ZM115.625 25C120.793 25 125 29.207 125 34.375C125 39.543 120.793 43.75 115.625 43.75C110.457 43.75 106.25 39.543 106.25 34.375C106.25 29.207 110.457 25 115.625 25ZM59.375 56.25C71.457 56.25 81.25 46.457 81.25 34.375C81.25 22.293 71.457 12.5 59.375 12.5C47.293 12.5 37.5 22.293 37.5 34.375C37.5 46.457 47.293 56.25 59.375 56.25ZM59.375 25C64.543 25 68.75 29.207 68.75 34.375C68.75 39.543 64.543 43.75 59.375 43.75C54.207 43.75 50 39.543 50 34.375C50 29.207 54.207 25 59.375 25Z" fill="#3A3A3A"/>
        </svg>
        }
        </>
    )
}