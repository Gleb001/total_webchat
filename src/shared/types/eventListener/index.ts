// main ===================================================== //
type ParametersEventListener = Parameters<typeof addEventListener>
type OptionsEventListener = ParametersEventListener[2]

// exports ================================================== //
export type {
    OptionsEventListener,

    ParametersEventListener
};