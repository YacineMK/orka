import type React from "react";
import { Handle, Position, type NodeProps } from "reactflow";

interface CustomNodeData {
  id: string;
  title: string;
  type: "new_entry" | "general" | "issue";
  subtitle?: string;
  backgroundColor?: string;
  user?: string;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "new_entry":
      return "#E8DEF8";
    case "general":
      return "#FFF2CC";
    case "issue":
      return "#E8DEF8";
    default:
      return "#E8DEF8";
  }
};

const getIconColor = (type: string) => {
  switch (type) {
    case "new_entry":
      return "#6750A4";
    case "general":
      return "#FB9820";
    case "issue":
      return "#6750A4";
    default:
      return "#6750A4";
  }
};

const CustomNode: React.FC<NodeProps<CustomNodeData>> = ({
  data,
  isConnectable,
}) => {
  const backgroundColor = getTypeColor(data.type);
  const iconColor = getIconColor(data.type);

  return (
    <div
      className="relative rounded-lg border border-gray-200 bg-white shadow-sm"
      style={{
        width: "220px",
        padding: "10px",
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        className="!w-3 !h-3 !bg-[#6750A4] !border-2 !border-white"
        style={{ left: -8 }}
      />
      <div className="flex items-start gap-2">
        <div className="rounded p-1" style={{ backgroundColor }}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 59 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.656 18.9884C17.2595 22.2122 19.7217 24.9228 22.7672 26.817C25.8127 28.7113 29.3213 29.7143 32.9004 29.714H39.1537C39.9566 27.425 41.5369 25.4955 43.6154 24.2669C45.6938 23.0382 48.1365 22.5894 50.5116 22.9997C52.8867 23.4101 55.0414 24.6532 56.5947 26.5094C58.148 28.3655 59 30.7151 59 33.1429C59 35.5708 58.148 37.9204 56.5947 39.7765C55.0414 41.6327 52.8867 42.8758 50.5116 43.2862C48.1365 43.6965 45.6938 43.2477 43.6154 42.019C41.5369 40.7904 39.9566 38.8609 39.1537 36.5719H32.9004C29.2693 36.5764 25.6774 35.8152 22.3558 34.3373C19.0342 32.8593 16.0564 30.6974 13.614 27.9904V44.0149C15.8848 44.8237 17.7987 46.4153 19.0174 48.5084C20.2361 50.6014 20.6812 53.0611 20.2739 55.4528C19.8666 57.8444 18.6332 60.014 16.7917 61.5781C14.9501 63.1422 12.6191 64 10.2105 64C7.80187 64 5.47081 63.1422 3.62929 61.5781C1.78777 60.014 0.554366 57.8444 0.147066 55.4528C-0.260233 53.0611 0.184801 50.6014 1.40351 48.5084C2.62222 46.4153 4.53614 44.8237 6.80699 44.0149V19.9851C4.62816 19.209 2.77512 17.7111 1.55079 15.7364C0.32646 13.7617 -0.196727 11.427 0.0667551 9.11393C0.330238 6.80084 1.3648 4.64621 3.00132 3.00229C4.63785 1.35836 6.77951 0.322379 9.07622 0.0637017C11.3729 -0.194976 13.6888 0.338952 15.6453 1.5782C17.6017 2.81745 19.083 4.68871 19.847 6.88608C20.611 9.08345 20.6125 11.4769 19.8512 13.6753C19.0899 15.8736 17.611 17.7467 15.656 18.9884ZM10.2105 57.1453C11.1131 57.1453 11.9788 56.784 12.6171 56.141C13.2554 55.4979 13.614 54.6258 13.614 53.7164C13.614 52.807 13.2554 51.9348 12.6171 51.2918C11.9788 50.6487 11.1131 50.2875 10.2105 50.2875C9.30781 50.2875 8.44212 50.6487 7.80384 51.2918C7.16557 51.9348 6.80699 52.807 6.80699 53.7164C6.80699 54.6258 7.16557 55.4979 7.80384 56.141C8.44212 56.784 9.30781 57.1453 10.2105 57.1453ZM48.7833 36.5719C49.6859 36.5719 50.5516 36.2106 51.1899 35.5676C51.8282 34.9245 52.1868 34.0524 52.1868 33.1429C52.1868 32.2335 51.8282 31.3614 51.1899 30.7183C50.5516 30.0753 49.6859 29.714 48.7833 29.714C47.8806 29.714 47.0149 30.0753 46.3767 30.7183C45.7384 31.3614 45.3798 32.2335 45.3798 33.1429C45.3798 34.0524 45.7384 34.9245 46.3767 35.5676C47.0149 36.2106 47.8806 36.5719 48.7833 36.5719ZM13.614 10.2836C13.6109 9.37517 13.2503 8.50508 12.6111 7.86435C11.9719 7.22361 11.1065 6.86459 10.2048 6.8661C9.30314 6.86761 8.43891 7.22954 7.80186 7.87242C7.16481 8.5153 6.80701 9.38659 6.80701 10.295C6.80701 11.2034 7.16481 12.0747 7.80186 12.7176C8.43891 13.3605 9.30314 13.7224 10.2048 13.7239C11.1065 13.7254 11.9719 13.3664 12.6111 12.7257C13.2503 12.0849 13.6109 11.2148 13.614 10.3064V10.2836Z"
              fill="#0091E2"
            />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-medium text-gray-600">{data.type}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{data.title}</span>
          </div>
          {data.user && (
            <div className="mt-1 text-xs text-gray-400">{data.user}</div>
          )}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        className="!w-3 !h-3 !bg-[#6750A4] !border-2 !border-white"
        style={{ right: -8 }}
      />
    </div>
  );
};

export default CustomNode;
