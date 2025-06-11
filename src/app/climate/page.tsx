import { Overview } from "./components/overview";
import { Solutions } from "./components/solutions";
import { Partnerships } from "./components/parternShips";

export default function ClimatePage() {
  return (
    <div>
      <Overview />
      <div className="max-w-10/12 mx-auto py-16">
        <Solutions />
        <Partnerships />
      </div>
    </div>
  );
}
