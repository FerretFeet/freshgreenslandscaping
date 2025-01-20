/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { ChangeEventHandler, useState } from "react"


export interface LabelInput {
    formField: string,
    labelText: string,
    inputType: string,
    placeHolder: string,
    value: string
    changeHandler: ChangeEventHandler;
    required: boolean
}

export interface CheckboxInput {
    legendText: string,
    formField: string, 
    selectOptionsArr: Array<Value_Text>, 
    changeHandler: ChangeEventHandler
}

export interface Value_Text {
    value: string,
    text: string
}

interface FormState {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }

const baseUrl = process.env.NETLIFY_SITE_URL || "https://localhost:3000"


export async function formAction({ request }: ActionFunctionArgs) {
    // REQUIRES WORK
    // 
    // ###############
    // 
    // REQUIRES WORK
    const formData = await request.formData();
    console.log(baseUrl);
    const response = await fetch(`${baseUrl}/contactForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "form-name": "contactForm v1",
        name: String(formData.get("name")),
        phone: String(formData.get("phone")),
        email: String(formData.get("email")),
        subject: String(formData.get("subject")),
        message: String(formData.get("message")),
      }).toString(),
    });
    console.log(response);
    return redirect("/contact-us");
  }

// Allows for easier creation of form inputs
export default function FormConstructor() {
    // Form Inputs created from formCheckBoxFields and formTextFields
    // FormState, formAction(), and useState all must match whatever inputs you want to create.
    // Modify this function's return statement to change form rendering.

    const formCheckboxFields: CheckboxInput[] = [
        {
            legendText: "Select Interested Services",
            formField: 'services', 
            selectOptionsArr: [
                { value: 'LawnMowing', text: 'Lawn Mowing and Edging' },
                { value: 'HedgeTreeTrimming', text: 'Hedge/Tree Trimming' },
                { value: 'Leaf', text: 'Leaf Cleanup' },
                { value: 'BedMaintenance', text: 'Flower Bed Maintenance' },
                { value: 'PetWaste', text: 'Pet Waste Cleanup' },
            ],
            changeHandler: onChangeHandler
        },
    ];

    const formTextFields: LabelInput[] = [
        {
          formField: 'fname',
          labelText: 'First Name',
          inputType: 'text',
          placeHolder: 'First Name',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'lname',
          labelText: 'Last Name',
          inputType: 'text',
          placeHolder: 'Last Name',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'phone',
          labelText: 'Phone Number',
          inputType: 'tel',
          placeHolder: '555-123-4567',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'email',
          labelText: 'Email Address',
          inputType: 'email',
          placeHolder: 'yourname@email.com',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'address',
          labelText: 'Address',
          inputType: 'text',
          placeHolder: '123 Elm St.',
          value: '', 
          changeHandler: onChangeHandler,
          required: true,
        },
        {
          formField: 'additionalNotes',
          labelText: 'Additional Notes',
          inputType: 'textarea',
          placeHolder: 'Enter Additional Notes or Questions',
          value: '', 
          changeHandler: onChangeHandler,
          required: false,
        },
      ];

    const [state, setState] = useState<FormState>({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value }: {name:string, value:string} = event.target
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }


  
    function createLabelInput({formField, labelText, inputType, placeHolder, value, changeHandler, required}: LabelInput) { 
        return (
            <div className="createdLabelInputCont">
                <label htmlFor={formField}>{labelText}</label>
                <input type={inputType}
                    name={formField}
                    placeholder={placeHolder}
                    value={value}
                    onChange={changeHandler}
                    required={required}
                />
            </div>
        )
    }



    function createCheckboxLabelInput({legendText, formField, selectOptionsArr, changeHandler}: CheckboxInput) {
        return (
            <div className="createdCheckboxCont">
                <legend>{legendText}</legend>
                {selectOptionsArr.map((val, idx) => {
                    return (
                        <div className="checkLabelCont" key={idx}>
                            <input
                            type="checkbox"
                            name={formField}
                            value={val.value}
                            onChange={changeHandler}
                            />
                            <label htmlFor={formField}>{selectOptionsArr.at(idx)?.text}</label>
                        </div>


                    )
                })}
            </div>
        )
    }


    return (
        <Form >
            {createLabelInput(formTextFields[0])}
            {createLabelInput(formTextFields[1])}
            {createLabelInput(formTextFields[2])}
            {createLabelInput(formTextFields[3])}
            {createLabelInput(formTextFields[4])}
            {createCheckboxLabelInput(formCheckboxFields[0])}
            {createLabelInput(formTextFields[5])}
        </Form>
    )
}