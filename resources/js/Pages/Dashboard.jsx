import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import '../../css/app.css';
export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Westland Publishers
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 flex gap-6">
                        {/* Create Section */}
                        <div className="w-1/2 bg-gray-300 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">
                                Create
                            </h3>
                            <div className="flex flex-col gap-2 text-gray-900">
                                <Link
                                    href="/journal-form"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Create Journals
                                </Link>
                                <Link
                                    href="/article-form"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Create Article
                                </Link>
                                <Link
                                    href="/editor-form"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Create Editors
                                </Link>

                                <Link
                                    href="/slaider-form"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Slaider form
                                </Link>
                                <Link
                                    href="/members-in-form"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Members in form
                                </Link>
                                <Link
                                    href="/our-editors-form"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Our editors
                                </Link>
                                <Link
                                    href="/articel-types"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                   create articel types
                                </Link>
                            </div>
                        </div>

                        {/* View Section */}
                        <div className="w-1/2 bg-gray-300 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">View</h3>
                            <div className="flex flex-col gap-2 text-gray-900">
                                <Link
                                    href="/table?table=journals"
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                >
                                    View Journals
                                </Link>
                                <Link
                                    href="/table?table=articles"
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                >
                                    View Article
                                </Link>
                                <Link
                                    href="/table?table=editors"
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                >
                                    View Editors
                                </Link>
                                <Link
                                    href="/table?table=editors"
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                >
                                    View articel types
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
