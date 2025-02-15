# Vendor Management System

## Overview
A role-based vendor management system built using **Next.js** and **Redux** (UI only). This system manages fleets, vendors, and driver assignments.

## Features
- **Super Vendor**: Manages all vendors, roles, and fleet assignments.
- **Regional Vendor**: Assigns vehicles to City Vendors.
- **City Vendor**: Onboards and assigns drivers to vehicles.
- **Local Vendor**: Manages deployed drivers and vehicles.
- **Deployment Associate**: Views assigned tasks.

## Installation
```sh
npm install
npm run dev
```

## Screenshots
- **Login Page**: `login.png`
- **Home Page**: `home.png`

### **Super Vendor**
- **Dashboard** (`SupDB.png`): Full control over all nodes, edit and move any.
- **Manage Vendors** (`SupManageVendors.png`): List all vendors, add/edit/delete.
- **View Fleet** (`SupViewFleet.png`): Displays car availability and assigns to Regional Vendors.
- **Manage Roles** (`SupManageRoles.png`): Controls navigation permissions for all roles.

### **Regional Vendor**
- **Dashboard** (`RegDB.png`): Edit only current and lower-level roles.
- **Regional Fleet Management** (`RegFleet.png`): Assigns cars to City Vendors.
- **Manage City Vendors** (`RegManageCity.png`): Add, delete, edit City Vendors.

### **City Vendor**
- **Dashboard** (`CityDB.png`)
- **Onboard Drivers** (`CityOnboard.png`): Add drivers, upload documents, assign vehicles.

### **Local Vendor**
- **Dashboard** (`LocDB.png`)
- **Deployed Tasks** (`LocDeployed.png`): Manages vehicle deployment and assigned drivers.

### **Deployment Associate**
- **Dashboard** (`DepDB.png`)
- **View Tasks** (`DepTasks.png`): Displays assigned tasks.

## Notes
- The system dynamically fetches assigned vehicles based on roles.
- Role-based permissions control which actions and data each user can access.

## License
MIT

