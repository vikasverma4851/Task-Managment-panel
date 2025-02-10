import React, { useState } from "react";
import "./TaskDetails.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFilePdf,
  faFileImage,
  faFileAudio,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";

import { useLocation, useParams } from "react-router-dom";

const TaskDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [files] = useState([
    {
      name: "Document.pdf",
      type: "pdf",
      url: "https://example.com/document.pdf",
    },
    { name: "Image.jpg", type: "image", url: "https://example.com/image.jpg" },
    { name: "Audio.mp3", type: "audio", url: "https://example.com/audio.mp3" },
    { name: "Video.mp4", type: "video", url: "https://example.com/video.mp4" },
    {
      name: "TextFile.txt",
      type: "text",
      url: "https://example.com/textfile.txt",
    },
  ]);

  const { id } = useParams(); // Get task ID from URL
  const location = useLocation(); // Access passed data
  const task = location.state; // Task data

  const adminData = [
    {
      id: 1,
      firstName: "Shubham",
      lastName: "Sharma",
      profileImage: "https://via.placeholder.com/40", // Placeholder image URL
    },
    {
      id: 2,
      firstName: "Aman",
      lastName: "Gupta",
      profileImage: "https://via.placeholder.com/40", // Placeholder image URL
    },
    {
      id: 3,
      firstName: "Priya",
      lastName: "Verma",
      profileImage: "https://via.placeholder.com/40", // Placeholder image URL
    },
  ];

  const taskStatusNav = ["Description", "Attachment", "Message"];

  // Function to get file icon based on type
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "pdf":
        return (
          <FontAwesomeIcon
            icon={faFilePdf}
            style={{ width: "100px", height: "60px" }}
          />
        );
      case "image":
        return (
          <FontAwesomeIcon
            icon={faFileImage}
            style={{ width: "100px", height: "60px" }}
          />
        );
      case "audio":
        return (
          <FontAwesomeIcon
            icon={faFileAudio}
            style={{ width: "100px", height: "60px" }}
          />
        );
      case "video":
        return (
          <FontAwesomeIcon
            icon={faFileVideo}
            style={{ width: "100px", height: "60px" }}
          />
        );
      default:
        return (
          <FontAwesomeIcon
            icon={faFile}
            style={{ width: "100px", height: "60px" }}
          />
        );
    }
  };

  const handleFileClick = (fileUrl) => {
    window.open(fileUrl, "_blank"); // Open the file in a new tab
  };

  return (
    <div className="taskDetails_container">
      <h3>Task Details</h3>
      <div
        className="department_details_div"
        style={{ backgroundColor: "#815200" }}
      >
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div>
          <label htmlFor="departmentName">Priority: </label>
          <p
            id="departmentName"
            style={{
              border: "1px solid red",
              color: "red",
              width: "45px",
              padding: "3px 6px",
              borderRadius: "5px",
            }}
          >
            High
          </p>
        </div>
        <div>
          <label htmlFor="departmentDescription">Due date: </label>
          <p id="departmentDescription">20 Oct 2024</p>
        </div>
        <div>
          <label htmlFor="departmentDescription">Status: </label>
          <p id="departmentDescription">{task.status}</p>
        </div>
        <div>
          <label htmlFor="departmentDescription">Created by </label>
          <p id="departmentDescription">Subham</p>
        </div>
        <div>
          <label htmlFor="departmentName">Assignees: </label>
          <div className="admin_profile_div">
            {adminData.map((admin) => (
              <div className="admin_in_charge">
                <div>
                  <img src="" alt="profile" />
                </div>
                <div className="departmentDetails_profile_name">
                  <div>Vikas</div>
                  <div>Verma</div>
                </div>
              </div>
            ))}
            <IoMdAddCircleOutline style={{ width: "35px", height: "40px" }} />
          </div>
        </div>
        <div className="departmentDetials_edit_btn">
          <MdEdit />
          {"    "}
          Edit
        </div>
      </div>

      <div className="taskDetails_description_div">
        <div className="taskDetails_btns">
          <ul className="task_status_nav">
            {taskStatusNav.map((status, index) => (
              <div
                key={index}
                className={`task_status_item ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <li>{status}</li>
                <div className="line_hover"></div>
              </div>
            ))}
          </ul>
          <hr style={{ margin: "0px 20px" }} />
        </div>
        <div className="task_detail_description_content">
          {/* Description */}
          <div style={{ display: activeTab === 0 ? "block" : "none", padding:'2px 30px' }}>
            <h3 style={{margin:'10px'}}>Task Managment</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            quibusdam doloribus eligendi quos sint voluptate ullam asperiores,
            voluptatem amet tenetur fuga veritatis quasi itaque exercitationem
            facere suscipit voluptatibus ea sunt dolores. Tempora dolor
            necessitatibus sapiente, fuga aperiam nostrum saepe ea eveniet amet
            est perferendis quasi quod ducimus totam cupiditate earum non quae
            magni. Molestiae maxime qui omnis consectetur similique, explicabo
            et. Eligendi necessitatibus quo similique sint nobis aliquam omnis
            incidunt quae, culpa non qui, aperiam, nulla corporis architecto vel
            excepturi porro deserunt tempora fugit deleniti a iste. Natus
            facilis dicta velit quis eaque blanditiis quas praesentium neque
            fuga obcaecati? Exercitationem illo explicabo id autem, deserunt
            aspernatur eligendi placeat, odio maxime nam necessitatibus maiores
            enim eaque voluptatem repellat? Fuga obcaecati voluptate quibusdam
            blanditiis, id quod debitis nihil libero odit aspernatur sint.
            Facilis consequatur, eius laudantium eos perferendis neque nam
            consectetur earum in corporis ex perspiciatis atque aspernatur
            quisquam maxime quis, omnis minima. Architecto, esse, rerum dolorum
            cum tenetur nulla distinctio, quas totam consequatur odio sequi.
            Possimus, obcaecati repellat molestiae ipsam dolore dolorem saepe
            sequi sint, nobis, aspernatur illum pariatur accusamus quam eos
            dolorum! Quidem non a nemo ipsum quibusdam obcaecati consequatur
            accusantium veniam pariatur suscipit aliquam enim placeat, molestias
            tenetur unde mollitia? Expedita, cumque voluptatem tempore assumenda
            ducimus minima necessitatibus adipisci quod maiores provident, hic
            nam? Laboriosam fuga cumque delectus dolorem vitae deleniti deserunt
            laudantium eum nisi quisquam itaque cupiditate porro sint
            perferendis, maiores amet commodi labore. Necessitatibus delectus
            aliquid perferendis, sit praesentium corporis earum ea voluptatum
            magnam maxime minima quidem velit. Ullam quo dolorem reiciendis ipsa
            minima quasi. Nihil laborum ea quas, officia molestiae dignissimos
            excepturi dicta. Possimus molestiae asperiores porro vero. Ipsum
            odio magnam praesentium corrupti maxime harum illo deleniti eius!
            Maxime modi quibusdam aspernatur commodi dolorem expedita magnam
            optio reprehenderit? Impedit cupiditate explicabo hic at. Quibusdam
            odit, aperiam aut iste consectetur enim reprehenderit rem adipisci
            fuga necessitatibus provident eveniet quidem! Ut vel odio, molestiae
            error id iste quae unde similique doloribus eum voluptatibus
            expedita pariatur porro aut deserunt esse itaque ducimus sit veniam
            ad maxime nostrum quaerat. Cum consequatur blanditiis aut facilis
            officia dolorem mollitia eum ad eligendi velit sint tempora veniam
            neque, dolores deserunt id impedit quis iure ipsa, exercitationem,
            ab aliquid ipsam. Debitis, quia et. Inventore nisi reiciendis
            voluptate et illo rem voluptas minima repellendus doloribus. Placeat
            quidem eveniet at totam tempora error officiis quia ex perferendis,
            temporibus consequuntur nulla magni repellat. Similique maiores illo
            ipsa.
          </div>
          {/* Attachments */}
          <div style={{ display: activeTab === 1 ? "block" : "none" }}>
            <h3>Files</h3>
            <ul style={{ listStyleType: "none", padding: "20px" }}>
              {files.map((file, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() => handleFileClick(file.url)}
                  >
                    {getFileIcon(file.type)}{" "}
                    {/* Display the correct file icon */}
                  </div>
                  <span>{file.name}</span> {/* Display file name */}
                </li>
              ))}
            </ul>
          </div>
          {/* Message */}
          <div style={{ display: activeTab === 2 ? "block" : "none" }}>
            chat here
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
