export class ApiFeatures {
  constructor(mongoosesQuery, queryString) {
    this.mongoosesQuery = mongoosesQuery;
    this.queryString = queryString;
  }
  // pagination
  paginate() {
    let page = this.queryString.page * 1 || 1;
    if (this.queryString.page <= 0) page = 1;
    let skip = (page - 1) * 5;
    this.page=page
    this.mongoosesQuery.skip(skip).limit(5);
    return this;
  }
  //   filter
  filter() {
    let filterObj = { ...this.queryString };
    let excludedQuery = ["page", "sort", "fields", "keyword"];
    excludedQuery.forEach((ele) => {
      delete filterObj[ele];
    });
    filterObj = JSON.stringify(filterObj);
    filterObj = filterObj.replace(
      "/\b(gt|gte|lt|lte)\b/g",
      (match) => `$${match}`
    );
    filterObj = JSON.parse(filterObj);
    this.mongoosesQuery.find(filterObj);
    return this;
  }
  // sort
  sort() {
    if (this.queryString.sort) {
      let sortedBy = this.queryString.sort.split(",").join(" ");
      this.mongoosesQuery.sort(sortedBy);
    }
    return this;
  }
  //   search
  search() {
    if (this.queryString.keyword) {
      this.mongoosesQuery.find({
        $or: [
          { title: { $regex: this.queryString.keyword, $options: "i" } },
          { description: { $regex: this.queryString.keyword, $options: "i" } },
        ],
      });
    }
    return this;
  }
  //   fields
  fields() {
    if (this.queryString.fields) {
      let fields = this.queryString.fields.split(",").join(" ");
      this.mongoosesQuery.select(fields);
    }
    return this;
  }
}
