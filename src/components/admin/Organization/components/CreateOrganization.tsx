"use client";

import { OrganizationRegisterInput } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { AppConfig } from "@/config/appConfig";
import FieldInput from "@/components/global/FieldInput";
import FieldDropdown from "@/components/global/FieldDropdown";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { Button } from "primereact/button";

type Props = {
  onSubmit: (val: OrganizationRegisterInput) => void;
  loading: boolean;
  type: "CREATE" | "UPDATE";
  formData: OrganizationRegisterInput | null;
};
const CreateOrganization = ({ type = "CREATE", ...props }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Organization name is required"),
    employeeCount: Yup.number().required("Organization name is required"),
  });
  const form = useForm<OrganizationRegisterInput>({
    defaultValues: {
      ...(type === "UPDATE" &&
        props.formData && {
          ...props.formData,
          workingModel: props.formData.workingModel
            ? AppConfig.WORKING_MODE.find(
                (elm) => elm.count === props?.formData?.workingModel
              )?.value
            : "",
        }),
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      className="grid sm:grid-cols-1 sm:px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      onSubmit={form.handleSubmit(props.onSubmit)}
    >
      <h4 className="mb-1 mt-0 border-0 border-l-8 px-2 border-blue-500 border-solid col-span-4 text-gray-600">
        General Information
      </h4>
      <Controller
        name="name"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FieldInput
            label="Name"
            {...field}
            icon="pi pi-user"
            invalid={Boolean(errors.name?.message)}
          />
        )}
      />
      <Controller
        name="employeeCount"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FieldInput
            keyfilter={"int"}
            {...field}
            label="Est. employee"
            icon="pi pi-user"
            invalid={Boolean(errors.employeeCount?.message)}
          />
        )}
      />
      <Controller
        name="workingModel"
        control={form.control}
        render={({ field }) => (
          <FieldDropdown
            label="Working model"
            options={AppConfig.WORKING_MODE}
            {...field}
          />
        )}
      />
      {/* <Controller
        name="startTime"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              type="time"
              className="w-full"
              {...field}
              "
            />
          </IconField>
        )}
      /> */}
      {/* <Controller
        name="endTime"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              type="time"
              className="w-full"
              {...field}
              "
            />
          </IconField>
        )}
      /> */}
      <Controller
        name="orgContact"
        control={form.control}
        render={({ field }) => (
          <FieldInput {...field} label="Contact" icon="pi pi-user" />
        )}
      />
      <h4 className="mb-1 col-span-4 text-gray-600 border-0 border-l-8 px-2 border-blue-500 border-solid">
        Address Details
      </h4>
      <Controller
        name="address.buildingNumber"
        control={form.control}
        render={({ field }) => (
          <FieldInput {...field} label="Building No." icon={"pi pi-building"} />
        )}
      />
      <Controller
        name="address.street"
        control={form.control}
        render={({ field }) => (
          <FieldInput {...field} label="Street" icon={"pi pi-building"} />
        )}
      />
      <Controller
        name="address.city"
        control={form.control}
        render={({ field }) => (
          <FieldInput {...field} icon="pi pi-info-circle" label="City" />
        )}
      />
      <Controller
        name="address.state"
        control={form.control}
        render={({ field }) => (
          <FieldInput {...field} icon="pi pi-info-circle" label="State" />
        )}
      />
      <Controller
        name="address.pin"
        control={form.control}
        render={({ field }) => (
          <FieldInput {...field} icon="pi pi-info-circle" label="Pin No." />
        )}
      />

      <div className="col-span-4 flex gap-3 justify-end">
        <Button
          type="reset"
          onClick={() => form.reset()}
          label="Reset"
          icon={"pi pi-refresh"}
          severity="danger"
        />
        <ButtonUi
          color="primary"
          loading={props.loading}
          type="submit"
          label={type === "CREATE" ? "Create" : "Update"}
        />
      </div>
    </form>
  );
};

export default CreateOrganization;
