import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCheckCircle, faStar, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Stats() {
  return (
    <div className="Stats-section h-[50vh] flex flex-col justify-center gap-14 items-center">
      <h2 className="text-2xl font-bold">Trusted by Learners Worldwide</h2>
      
      <div className="stats-frame flex flex-row justify-center gap-10">
        {/* Card 1 */}
        <div className="stats-card flex flex-col items-center text-center gap-2">
          <FontAwesomeIcon icon={faUsers} size="3x" className="icon-color" />
          <div className="stats-num font-extrabold text-4xl">200K+</div>
          <div className="font-semibold">Happy Students</div>
        </div>

        {/* Card 2 */}
        <div className="stats-card flex flex-col items-center text-center gap-2">
          <FontAwesomeIcon icon={faCheckCircle} size="3x" className="icon-color" />
          <div className="stats-num font-extrabold text-4xl">92%</div>
          <div className="font-semibold">Course Completion Rate</div>
        </div>

        {/* Card 3 */}
        <div className="stats-card flex flex-col items-center text-center gap-2">
          <FontAwesomeIcon icon={faStar} size="3x" className="icon-color" />
          <div className="stats-num font-extrabold text-4xl">50,000+</div>
          <div className="font-semibold">5-Star Reviews</div>
        </div>

        {/* Card 4 */}
        <div className="stats-card flex flex-col items-center text-center gap-2">
          <FontAwesomeIcon icon={faGraduationCap} size="3x" className="icon-color" />
          <div className="stats-num font-extrabold text-4xl">500+</div>
          <div className="font-semibold">Expert Instructors</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
