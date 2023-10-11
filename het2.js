import React from 'react'

const het2 = () => {
    return (
        <div>
            <RaButton
                dataList={[
                    {
                        label: "Excellent",
                        value: "Excellent"
                    },
                    {
                        label: "Above Average",
                        value: "AboveAverage"
                    },
                    {
                        label: "Avarage Below",
                        value: "AvarageBelow"
                    },
                    {
                        label: "Average Poor",
                        value: "AveragePoor"
                    }
                ]}
                fieldName={'Overall Event Rating'}
                name={'rating'}
                formik={formikdata}
            />
        </div>
    )
}

export default het2