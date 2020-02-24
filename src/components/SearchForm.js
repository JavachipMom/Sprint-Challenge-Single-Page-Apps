import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import { Grid, Button } from "@material-ui/core";


const SearchForm = () => {

  const [charachter, setCharacter] = useState({});


  return (

    <div className="search-form">

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Link
          to="/"
        >
          <Button
            variant="outlined"
            color="primary">Home
            </Button>
        </Link>
        <Link
          to="/search"
        >
          <Button
            variant="outlined"
            color="primary">Search
            </Button>
        </Link>
      </Grid>

      <br />

      <Form>
        <label>
          Search Character:
          <Field
            type="text"
            name="character"
            placeholder="Search character here..." />
        </label>
      </Form>
    </div>
  )
}

export default withFormik({

})(SearchForm);