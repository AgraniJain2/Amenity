import React, { useState } from "react";
import "./style.css";

const categoryIcons = {
  Building: "🏠",
  Washroom: "🚻",
  Elevator: "🛗",
  "Water Cooler": "💧",
  Medical: "🏥",
  Others: "ℹ️",
};

const componentsData = [
  { id: 1, name: "PRP Mens Washroom 1", category: "Washroom" },
  { id: 2, name: "PRP Mens Washroom 2", category: "Washroom" },
  { id: 3, name: "PRP Ladies Washroom 1", category: "Washroom" },
  { id: 4, name: "PRP Ladies Washroom 2", category: "Washroom" },
  { id: 5, name: "Accessible Washroom", category: "Washroom" },
  { id: 6, name: "PRP Staff Only Lift", category: "Elevator" },
  { id: 7, name: "PRP Ladies Only Lift", category: "Elevator" },
  { id: 8, name: "PRP Normal Lift", category: "Elevator" },
  { id: 9, name: "SJT Odd Floor Lift", category: "Elevator" },
  { id: 10, name: "SJT Even Floor Lift", category: "Elevator" },
  { id: 11, name: "SJT Ladies Only Lift", category: "Elevator" },
  { id: 12, name: "SJT Staff Only Lift", category: "Elevator" },
  { id: 13, name: "PRP Water Cooler 1", category: "Water Cooler" },
  { id: 14, name: "PRP Water Cooler 2", category: "Water Cooler" },
  { id: 15, name: "PRP Water Cooler 3", category: "Water Cooler" },
  { id: 16, name: "PRP Medical Room", category: "Medical" },
  { id: 17, name: "SJT Medical Room", category: "Medical" },
  { id: 18, name: "Chetinad Hospital", category: "Medical" },
  { id: 19, name: "Student Welfare Office", category: "Others" },
  { id: 20, name: "TT Startup Room", category: "Others" },
  { id: 21, name: "PRP Lost & Found Room", category: "Others" },
  { id: 22, name: "SJT Lost & Found Room", category: "Others" },
  { id: 23, name: "KC Food (Lalit Vihar)", category: "Others" },
  { id: 24, name: "PRP Stationary", category: "Others" },
  { id: 25, name: "SJT Stationary", category: "Others" },
  { id: 26, name: "TT Balaji Shop", category: "Others" },
  { id: 27, name: "Mens Hostel Enzo", category: "Others" },
];

const categories = ["All", "Washroom", "Elevator", "Water Cooler", "Medical", "Others"];

const ComponentList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredComponents = componentsData.filter((component) => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="component-list">
      <input
        type="text"
        id="search"
        placeholder="Search Different Amenities in VIT..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="categories">
        {categories.map((category) => (
          <span
            key={category}
            className={`category-tag ${selectedCategory === category ? "selected" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {filteredComponents.length > 0 ? (
        filteredComponents.map((component, index) => (
          <div className="component appear" key={component.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="icon">{categoryIcons[component.category]}</div>
            <div className="info">
              <h4>{component.name}</h4>
              <span className="tag">{component.category}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No Amenities Found</p>
      )}
    </div>
  );
};

export default ComponentList;