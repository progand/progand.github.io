---
title: "Dateylor - a tool for furniture makers"
start: "2022-02-17"
end: "2022-10-22"
image: "/img/projects/2022/Dateylor2022/dateylor-cutmaps.png"
technologies:
  - Vue
  - Bootstrap
  - Paper.js
  - Vector Graphics
images:
  - "/img/projects/2022/Dateylor2022/dateylor-order.png"
  - "/img/projects/2022/Dateylor2022/dateylor-furniture.png"
  - "/img/projects/2022/Dateylor2022/dateylor-cutmaps.png"
  - "/img/projects/2022/Dateylor2022/Dateylor-cutting.jpg"
  - "/img/projects/2022/Dateylor2022/dateylor-cutting.jpg"
  - "/img/projects/2022/Dateylor2022/Dateylor-cuttins-complex.jpg"
  - "/img/projects/2022/Dateylor2022/Dateylor-cutting-complex.jpg"
  - "/img/projects/2022/Dateylor2022/dateylor-add-furniture.png"
  - "/img/projects/2022/Dateylor2022/dateylor-catalog.png"
  - "/img/projects/2022/Dateylor2022/dateylor-details.png"
  - "/img/projects/2022/Dateylor2022/dateylor-orders.png"
hidden: true
video: 'https://youtu.be/nT01mnRxQOY'
---

[Demo Video](https://youtu.be/nT01mnRxQOY)
[Demo Video #2](https://youtu.be/4mMT8HyyUSo)

## My Role

I have build visual tool for detail processing on **Paper.js** and a number of related components on **Vue**. I used **Vuex** and **Vue Router** as well. Static HTML was provided by customer. **Bootstrap 4** CSS framework was used on the project.

I developed visual tool for detail processing. The tool has about 30 visual detail processing operations (_cuttings_, _drillings_, _grooves_). It contains plot, form and list of applied operations.

Other pages I developed:

- _Detail processing_ tool
- _Orders_ list.
- _Materials and edges_ page includes: datagrid with added raw materials and edges.
- _Add material_ and _add edge_ pages includes: datagrid with all materials and edges, filters, pagination.
- _Material_ details page includes: datagrid with added raw materials, selected material details, list of details (with reorder, edge and size management).
- _Cutting maps_ page includes: cutting maps image slider (images are being constructed on frontend from data), summary tables.
- _Furniture_ page includes: list of furniture grouped by category.
- _Add furniture_ page includes: datagrid with all furniture with filters, pagination.
- _Order details_ page includes: order summary tables, delivery form.

Features: datagrid, complex forms with validation, vector graphics visualisation.

Technologies: **Vue**, **Vuex**, **Vue Router**, **Bootstrap 4**, **Paper.js**, **Momemt.js**, **Lodash**, **Vector Graphics**.

## About Project

Dateylor is a tool for furniture maker, where user can order processed materials.

Typical use case is ordering everything you need to make a table, closet, kitchen cabinet, etc. User will only need to assemble furniture from ordered parts.

Example user flow:

1. User selects raw _materials_ with suitable size, color and price.
2. User splits raw materials into smaller square parts (aka _details_).
3. User adds _cuttings_, _drillings_, _grooves_ to each detail.
4. User adds _furniture_ and makes an order.

Dateylor provides visual tool for detail processing. User immediately sees all applyed operations (cuttings, drillings) on a plot.
