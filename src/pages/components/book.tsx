import { useState } from "react";

export default function Book() {
    const [isMounted, setIsMounted] = useState(false);
    const [showBookCover, setShowBookCover] = useState(false);
    const bookCoverAnimationCoverToFront = {
        animation: "rotateBookCoverToFront 500ms ease-out"
    };
    const bookCoverAnimationCoverToBack = {
        animation: "rotateBookCoverToBack 1500ms ease-out"
    };
    const bookCoverAnimationBackToFront = {
        animation: "rotateBookBackToFront 500ms ease-out"
    };
    const bookCoverAnimationBackToBack = {
        animation: "rotateBookBackToBack 1500ms ease-out"
    };
    return <div className='w-full flex justify-around items-center bg-white'>
        <p><span className="chevron left"></span></p>
        <div className="w-book h-book drop-shadow-book bookCover">

            <div className="bookside front">
                <img className="w-book h-book" src="test.jpg" alt="test" />
            </div>
            <div className="bookside back w-book h-book bg-gray-100">
                <div className="p-8">
                    <h1 className="text-2xl">Klappentext</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                </div>
            </div>
        </div>
        <p><span className="chevron right"></span></p>
    </div>
};
