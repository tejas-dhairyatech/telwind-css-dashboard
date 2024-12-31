// src/components/Breadcrumb.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';  // Add FontAwesome icons for better UX

interface BreadcrumbProps {
    paths: { label: string, link: string }[];  // Static paths with label and link
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
    return (
        <nav aria-label="breadcrumb" className="flex items-center">
            <ol className="flex items-center space-x-4 text-sm font-medium text-gray-600">
                {/* Home Icon */}
                <li>
                    <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
                        <FaHome />
                    </Link>
                </li>
                {paths.map((path, index) => {
                    return (
                        <li key={index} className="flex items-center">
                            {index === paths.length - 1 ? (
                                // Last item (active)
                                <span className="text-gray-800 font-semibold">{path.label}</span>
                            ) : (
                                <>
                                    {/* Inactive items (clickable) */}
                                    <Link
                                        to={path.link}
                                        className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                                    >
                                        {path.label}
                                    </Link>
                                    <span className="mx-2 text-gray-400">/</span>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
