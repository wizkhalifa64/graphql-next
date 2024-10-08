"use client";
import MenuComponent from "@/components/global/MenuComponent";
import { AppConfig } from "@/config/appConfig";
import { Role } from "@/graphql/graphql";
import { DialogAction, DialogActionType } from "@/types/appTypes";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { MenuItem } from "primereact/menuitem";
import { Dispatch } from "react";
import { ConfirmDialog } from "primereact/confirmdialog"; // For <ConfirmDialog /> component
import { confirmDialog } from "primereact/confirmdialog"; // For confirmDialog method

type Keys = keyof Role;

const columns: { name: string; uid: Keys }[] = [
  { name: "NAME", uid: "name" },
  { name: "ASSIGN TO", uid: "parent" },
  { name: "ACCESS", uid: "access" },
  { name: "ACTIONS", uid: "id" },
];
const RoleList = ({
  data,
  loading,
  dialogDispatch,
  deleteRole,
}: {
  data: Role[];
  loading: boolean;
  dialogDispatch: Dispatch<DialogAction<Role>>;
  deleteRole: (id: string) => void;
}) => {
  const handleEdit = (data: Role) => {
    const access = AppConfig.ACCESS.filter((elm) =>
      data.access?.includes(elm.value)
    ).map((i) => i.name);
    const requestBody: any = { ...data, access };
    dialogDispatch({ type: DialogActionType.EDIT_OPEN, payload: requestBody });
  };
  const emptyArray = [{ id: "", name: "Administration" }];
  const handleRemove = (body: Role) => {
    confirmDialog({
      message: (
        <div className="bg-gray-100 p-4 rounded-xl">
          <h3 className="text-gray-600 my-0">{body.name}</h3>
          <p>Do you want to delete this record?</p>
        </div>
      ),
      header: "Delete Confirmation",
      contentClassName: "p-0 pr-3",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger rounded-full",
      accept: () => deleteRole(body.id),
    });
  };
  const actionTemplate = (body: Role) => {
    const items: MenuItem[] = [
      {
        label: "Edit",
        command: () => handleEdit(body),
      },
      {
        label: "Delete",
        command: () => handleRemove(body),
      },
    ];
    return <MenuComponent items={items} />;
  };
  const accessTemplate = (body: Role) => {
    return (
      <div className="flex gap-2">
        {AppConfig.ACCESS?.filter(
          (i) => i.value && body?.access?.includes(i.value)
        )?.map((item, i) => (
          <span
            key={i}
            className="bg-green-100 rounded-full text-green-800 text-sm font-semibold flex items-center gap-1 pl-1 pr-3 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            {item?.label}
          </span>
        ))}
      </div>
    );
  };
  const assignTemplate = (body: Role) => {
    return (
      <span className="bg-[var(--highlight-bg)] rounded-full text-[var(--highlight-text-color)] text-sm font-semibold flex items-center gap-1 px-3 py-1 w-max">
        {body.parent
          ? data?.find((data) => data?.id === body.parent)?.name
          : emptyArray[0]?.name}
      </span>
    );
  };
  return (
    <>
      <ConfirmDialog />
      <DataTable
        paginator
        rows={5}
        pt={{
          thead: { className: "table-header" },
          column: {
            headerContent: { className: "flex justify-between" },
          },
          table: { className: "w-full" },
        }}
        rowsPerPageOptions={[5, 10, 25, 50]}
        loading={loading}
        value={data?.filter((i) => !i.isDelete) ?? []}
      >
        <Column sortable field="name" header={"Role Name"} />
        <Column body={accessTemplate} header={"Access"} />
        <Column body={assignTemplate} header={"Assign To"} />
        <Column body={actionTemplate} header={"Action"} />
      </DataTable>
    </>
  );
};

export default RoleList;
