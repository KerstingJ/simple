import React from 'react'

/*

    this should be an at a glance to invoices due.

    should have a list first sorted by paid/due
        then sorted by /Person/Job
    
    should just show name of person
        with a list of jobs under them and an amount
        green highlight for paid
        red highlight for due

    clicking on a person should link to the client page
    clicking on a job should link to the jobs page

*/

export default function(props){

    return(
        <div>
            <Header />
            This is my invoices View
        </div>
    )
}