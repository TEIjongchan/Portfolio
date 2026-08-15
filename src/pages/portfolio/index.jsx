import WorkList from "../../components/WorkList";
import { PORTFOLIO_CONSTANT } from "../../constant/portfolio";

export default function Portfolio() {
  return <WorkList items={PORTFOLIO_CONSTANT} basePath="/portfolio" />;
}
