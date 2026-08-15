import WorkList from "../../components/WorkList";
import { PROJECT_CONSTANT } from "../../constant/project";

export default function Project() {
  return <WorkList items={PROJECT_CONSTANT} basePath="/project" />;
}
