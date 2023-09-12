"use client";

import { UICard, UIField, UIForm } from "@/uikit";
import { Box, Button, Grid } from "@mui/material";
import { FC } from "react";
import { ICreateViewPropType, IFCategoryType } from "./create.decorator";

const CreateView: FC<ICreateViewPropType<IFCategoryType>> = ({
  onSubmit,
  methods,
}) => {
  return (
    <UICard sx={{ padding: 3 }}>
      <UIForm methods={methods}>
        <Box component={"form"} onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <UIField.Input name="name" label="Name" />
            </Grid>
            <Grid item xs={12}>
              <UIField.Input name="slug" label="Slug" />
            </Grid>
            <Grid item xs={12} gap={2}>
              <Box display={"flex"} justifyContent={"flex-end"} gap={2}>
                <Button onClick={()=>methods.reset()} variant="outlined" color="warning">
                  Clear
                </Button>
                <Button type="submit" variant="outlined">submit</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </UIForm>
    </UICard>
  );
};

export default CreateView;
