import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiController, visitorsController } from "../../api";


const initialState = {
    visitorCountIndicator: {
        day: {},
        month: {},
        graph: []
    },
    loading: "idle"
}

export const getVisitorCountIndicator = createAsyncThunk("mainPage/visitorCountIndicator", async (_, thunkAPI) => {
    const [month, day, graph] = await Promise.all([
        visitorsController.getVisitorsCountIndicatorMonth(),
        visitorsController.getVisitorCountIndicatorToday(),
        visitorsController.getVisitorsGraphMonth()
    ])
    return {
        month: month.data,
        day: day.data,
        graph: graph.data
    }
})

export const mainPageSlice = createSlice({
    name: "mainPage",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getVisitorCountIndicator.pending, (state) => {
            state.loading = "pending"
        }).addCase(getVisitorCountIndicator.fulfilled, (state, action) => {
            state.visitorCountIndicator = action.payload
            state.loading = "fulfilled"
        }).addCase(getVisitorCountIndicator.rejected, (state) => {
            state.loading = "rejected"
        })
    }
})

export const { } = mainPageSlice.actions

