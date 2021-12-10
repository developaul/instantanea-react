import { MutationHookOptions, useMutation } from "@apollo/client";

import { CREATE_PUBLICATION } from "./types";

export const useCreatePublication = (params?: MutationHookOptions) =>
  useMutation(CREATE_PUBLICATION, {
    update: (cache, result) => {
      console.log("🚀 ~ result", result)

    },
    ...params
  })